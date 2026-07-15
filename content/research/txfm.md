---
title: "Effective Biological Representation Learning by Masking Gene Expression"
conference: "preprint"
year: 2026
show_year: false
arxiv: "https://arxiv.org/abs/2605.31562"
authors: ["Kian Kenyon-Dean", "Alina Selega", "Ihab Bendidi", "Jordan M. Sorokin", "Luca Bertinetto", "David Errington", "Hayley Donnella", "Oren Kraus"]
thumbnail: "/images/txfm.svg"
thumbnail_width: "50%"
highlight: false
code_links:
  - text: "Code"
    url: "https://github.com/recursionpharma/opentxfm"
tldr: "RNA sequencing produces rich and diverse datasets of gene expression, offering compelling insights into cellular state and function that have many applications in drug discovery. Modeling such data is challenging due to inherent technical noise and experimental batch effects, as evidenced by many existing transcriptomic foundation models (FMs) underperforming relative to linear baselines. Such results raise the question of whether deep representation learning provides a distinct advantage over the direct use of raw transcript counts. Our work explores this by developing a new self-supervised model, TxFM, with a focus on inductive representation learning evaluations. TxFM employs a masked autoencoding approach tailored to diverse RNA-seq count data, and our ablation study empirically identifies crucial architecture configurations required for strong transfer performance. Additionally, we curate a public training corpus, DiverseRNA-1.4M, and find that TxFM trained on this curated dataset yields high-fidelity gene representations that outperform FMs trained on atlas-scale corpora over 100x larger. Overall, our results indicate that inductive self-supervised learning is a viable modeling approach for transcriptomics representation, provided a careful synthesis of model architecture and training data curation."
---
