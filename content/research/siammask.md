---
title: "Fast online object tracking and segmentation: A unifying approach"
conference: "CVPR"
year: 2019
show_year: false
arxiv: "https://arxiv.org/abs/1812.05050"
authors: ["Qiang Wang*", "Li Zhang*", "Luca Bertinetto*", "Weiming Hu", "Philip H.S. Torr"]
thumbnail: "/images/siammask.jpg"
thumbnail_width: "25%"
highlight: false  # Set to true to highlight this paper
code_links:
  - text: "Code"
    url: "https://github.com/foolwood/SiamMask"
post_links:
  - text: "TPAMI journal version"
    url: "https://ieeexplore.ieee.org/abstract/document/10036241"
tldr: "In this paper we illustrate how to perform both visual object tracking and semi-supervised video object segmentation, in real-time, with a single simple approach. Our method, dubbed SiamMask, improves the offline training procedure of popular fully-convolutional Siamese approaches for object tracking by augmenting their loss with a binary segmentation task. Once trained, SiamMask solely relies on a single bounding box initialisation and operates online, producing class-agnostic object segmentation masks and rotated bounding boxes at 55 frames per second. Despite its simplicity, versatility and fast speed, our strategy allows us to establish a new state of the art among real-time trackers on VOT-2018, while at the same time demonstrating competitive performance and the best speed for the semi-supervised video object segmentation task on DAVIS-2016 and DAVIS-2017."
---
