---
title: "Making Better Mistakes: Leveraging Class Hierarchies with Deep Networks"
conference: "CVPR"
year: 2020
show_year: false
arxiv: "https://arxiv.org/abs/1912.09393"
authors: ["Luca Bertinetto*", "Romain Mueller*", "Konstantinos Tertikas", "Sina Samangooei", "Nicholas A. Lord*"]
thumbnail: "/images/bettermistakes.jpg"
thumbnail_width: "25%"
highlight: false  # Set to true to highlight this paper
code_links:
  - text: "Code"
    url: "https://github.com/fiveai/making-better-mistakes"
tldr: "Deep neural networks have improved image classification dramatically over the past decade, but have done so by focusing on performance measures that treat all classes other than the ground truth as equally wrong. This has led to a situation in which mistakes are less likely to be made than before, but are equally likely to be absurd or catastrophic when they do occur. Past works have recognised and tried to address this issue of mistake severity, often by using graph distances in class hierarchies, but this has largely been neglected since the advent of the current deep learning era in computer vision. In this paper, we aim to renew interest in this problem by reviewing past approaches and proposing two simple methods which outperform the prior art under several metrics on two large datasets with complex class hierarchies: tieredImageNet and iNaturalist."
---
