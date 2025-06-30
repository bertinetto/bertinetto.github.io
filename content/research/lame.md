---
title: "Parameter-free Online Test-time Adaptation"
conference: "CVPR (oral)"
year: 2022
show_year: false
arxiv: "https://arxiv.org/abs/1606.05233"
authors: ["Malik Boudiaf", "Romain Mueller", "Ismail Ben Ayed", "Luca Bertinetto"]
thumbnail_width: "0%"
highlight: true
code_links:
  - text: "Code"
    url: "https://github.com/fiveai/LAME"
tldr: "Training state-of-the-art vision models has become prohibitively expensive for researchers and practitioners. For the sake of accessibility and resource reuse, it is important to focus on adapting these models to a variety of downstream scenarios. An interesting and practical paradigm is online test-time adaptation, according to which training data is inaccessible, no labelled data from the test distribution is available, and adaptation can only happen at test time and on a handful of samples. In this paper, we investigate how test-time adaptation methods fare for a number of pre-trained models on a variety of real-world scenarios, significantly extending the way they have been originally evaluated. We show that they perform well only in narrowly-defined experimental setups and sometimes fail catastrophically when their hyperparameters are not selected for the same scenario in which they are being tested. Motivated by the inherent uncertainty around the conditions that will ultimately be encountered at test time, we propose a particularly 'conservative' approach, which addresses the problem with a Laplacian Adjusted Maximum-likelihood Estimation (LAME) objective. By adapting the model's output (not its parameters), and solving our objective with an efficient concave-convex procedure, our approach exhibits a much higher average accuracy across scenarios than existing methods, while being notably faster and have a much lower memory footprint."
---
