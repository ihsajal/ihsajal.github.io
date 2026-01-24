---
title: "Quality and Plausibility of Imputation"
description: "Diagnostics assessing the plausibility of imputation using mice package."
date: 01-24-2026
thumbnail: "/images/statblog/Distribution_RF_Imputation.png"
tags: ["statistics"]
---


In one of our research, we encountered varying levels of missingness among covariates. 
We used multiple imputation by chained equations to impute those missing values. 
All of the available variables with complete and missing values were used in training the imputation model. 
However, we never formally checked the quality of the imputation 
before one of the reviewers asked about quality of the imputation and 
the plausability of missing at random (MAR) assumption. 
We followed two suggestions in the mice package (Van Buuren, 2011) 
to examine the plausibility of the MAR assumption. 
First, we compared the observed and the imputed data distributions of each of the seven variables 
in the model that have missing data.  The results presented in Figure 1 show that 
the two distributions look quite similar for all the variables.

<div class="h-6"></div>


<figure class="my-8">
  <img
    src="/images/statblog/Distribution_RF_Imputation.png"
    alt="Plausibility of imputed data illustration"
    class="mx-auto w-full max-w-6xl"
  />
  <figcaption class="mt-2 text-center text-sm text-gray-800">
    Figure 1: Comparison of observed and imputed data distributions.
  </figcaption>
</figure>

<div class="h-8"></div>


Next, we compare the two distributions conditional on the propensity score quartiles. 
The idea is that the conditional distributions should be similar if the assumed model for creating multiple imputations is a good fit. 
Figure 2 shows the results for breast density, which has around 55% missing values. 
We transformed the breast density variable into a binary variable: 0 (observed) and 1 (missing/imputed). 
We obtained propensity score by fitting logistic regression model using the transformed binary variable as response
and the remaining variables, those were used in mice for imputation of breast density, as covariates.
The predicted probabilities obtained from this model were used as propensity scores for downstream analysis.

<figure class="my-8">
  <img
    src="/images/statblog/BrDens_PropScore.png"
    alt="Imputation plausibility illustration"
    class="mx-auto w-full max-w-8xl"
  />
  <figcaption class="mt-2 text-center text-sm text-gray-800">
    Figure 2: Distribution of Breast Density at propensity score quartiles across observed and imputed data. The categories are - "all_fat" means almost entirely fat, "extrm_dense" is extremely dense, "heterog_dense" is heterogeneously dense, and "scattered" means scattered density.
  </figcaption>
</figure>


In figure 2, we do not see substantial difference in the distributions in observed and imputed data across four quartiles of propensity scores. 
Similar conclusions hold for the other variables as well. Altogether, these observations point to the plausibility of the MAR assumption. 

<div class="h-10"></div>


```{r}
library(mice)
library(lattice)

br.dens.na < is.na(br.dens)
fit.br.dens <- with(mast.imp, glm(br.dens.na ~ age + bmi 
                    + famhx + lcis + stage + ER, family = binomial))
ps <- rep(rowMeans(sapply(fit.br.dens$analyses, fitted.values)), 6)

long <- complete(mast.imp, action = "long", include = TRUE)  
long$ps <- ps

orig <- subset(long, .imp == 0)

orig$obs_imp_flag <- ifelse(is.na(orig$br.dens), "Imputed", "Observed")
orig$obs_imp_flag <- factor(orig$obs_imp_flag, levels = c("Observed", "Imputed"))


flag_map <- setNames(orig$obs_imp_flag, orig$.id)

long$obs_imp_flag <- flag_map[as.character(long$.id)]
long$obs_imp_flag <- factor(long$obs_imp_flag, levels = c("Observed", "Imputed"))

long_imp <- long[long$.imp != 0, ]

long_imp <- long_imp %>%
  group_by(.imp) %>%
  mutate(
      ps = cut(
      ps,
      breaks = quantile(ps, probs = c(0, .25, .50, .75, 1), na.rm = TRUE),
      include.lowest = TRUE,
      labels = c("0–25%", "25–50%", "50–75%", "75–100%")
    )
  ) %>%
  ungroup()

summary_df <- long_imp %>%
  group_by(.imp, ps, br.dens, obs_imp_flag) %>%  
  summarise(n = n(), .groups = "drop") %>%
  group_by(.imp, ps, obs_imp_flag) %>%
  mutate(percentage = n / sum(n) * 100) %>%  
  ungroup()



ggplot(summary_df, aes(x = factor(br.dens), y = percentage, fill = obs_imp_flag)) +
  geom_bar(stat = "identity", position = position_dodge(width = 0.7)) +
  facet_grid(.imp ~ ps) +  
  labs(
    x = "Breast Density",
    y = "Percentage (%)",
    fill = "Missing status",
    title = "Four panels according to propensity score quartiles"
  ) +
  theme_bw() +
  theme(strip.text.y = element_text(angle = 0))
```
