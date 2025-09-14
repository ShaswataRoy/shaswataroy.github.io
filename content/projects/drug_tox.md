---
title: "Explainability AI for Drug toxicity"
date: 2025-09-12
---
<div style="text-align:center;">
<a href="https://github.com/ShaswataRoy/shaswataroy.github.io" target="_blank" style="margin-right:20px;">
  <i class="fab fa-github" style="font-size:2em;"></i>
</a>
<a href="https://www.erdosinstitute.org/_files/ugd/660616_0da58d56257f426e9ed943a93f434d76.pdf" target="_blank">
  <i class="fas fa-file-pdf" style="font-size:2em;color:#d9534f;"></i>
</a>
</div>

This project uses explainable AI to identify chemical substructures linked to drug toxicity, focusing on the TOX21 dataset and NR-AhR activity. We preprocess the data, sanitize molecules, remove duplicates, and extract features for graph-based models.

<!--more-->

## Models

We train and compare three architectures:

- Graph Isomorphism Network (GIN)
- Graph Attention Network (GAT)
- Message Passing Neural Network (MPNN)

Each model classifies compounds as toxic or non-toxic. Performance is evaluated by accuracy, balanced accuracy, and ROC curve.

<div style="text-align:center;">
  <img src="/figures/roc.png" alt="ROC Curve" width="500"/>
</div>

All models perform similarly, with GAT showing a slight advantage.

## Explainability

To interpret the decisions of our trained models, we employ post-hoc explaining algorithms, specifically GNNExplainer and AttentionExplainer, comparing them to a DummyExplainer that produces random masks. GNNExplainer identifies key features by maximizing mutual information with the model predictions, while AttentionExplainer uses attention coefficients from the GAT.

We evaluate explanations based on fidelity and sparsity. Fidelity measures how well the identified features reproduce the model's predictions, and sparsity refers to the conciseness of the explanation. We analyze fidelity as a function of sparsity, using the following metrics:

$$
fid_+ = 1 - \frac{1}{N}\sum_{i=1}^N \mathcal{1}(\hat{y}_{i}^{G_C}= \hat{y}_i)
$$ 

$$
fid_- = 1 - \frac{1}{N}\sum_{i=1}^N \mathcal{1}(\hat{y}_i^{G_S} = \hat{y}_i)
$$

Here, $G_{S}$ represents the subgraph with key features and edges, and $G_{C}$ is the complement graph. A desirable explainer yields a small $fid_-$ (few key features needed to reproduce the model prediction) and a larger $fid_+$ (removing key features significantly affects prediction).

In our study, the attention network excels in providing reliable explanations. The MPNN architecture offers sufficient explanations, but they are not as critical as those from the GAT network. Unfortunately, we could not obtain meaningful explanations for the GIN architecture.

<div style="text-align:center;">
    <img src="/figures/fidelity.png" alt="Fidelity as a function of the number of most important features and edges topk" width="500"/>
</div>

We also compare GNNExplainer predictions for `topk=10` across architectures for two example graphs: one non-toxic and one toxic. Ideally, all architectures would identify the same key features for consistent and robust predictions. The results for the GAT and GIN architectures are shown below, with blue shading indicating the importance of features and edges in the prediction.

<div style="text-align:center;">
  <img src="/figures/gat_explanation.png" alt="GAT Explanation by GNNExplainer" width="500"/>
  <img src="/figures/gin_explanation.png" alt="GIN Explanation by GNNExplainer" width="500"/>
</div>

## Future Prospects and Conclusion

Future work could explore why the attention mechanism outperforms others and investigate previously identified chemical substructures linked to NR-AhR toxicity. Despite only scratching the surface, this project highlights the growing importance of explainable AI in the drug industry.

