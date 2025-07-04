---
title: "End-to-end representation learning for the Correlation Filter"
conference: "CVPR"
year: 2017
show_year: false
arxiv: "https://arxiv.org/abs/1704.06036"
authors: ["Jack Valmadre*", "Luca Bertinetto*", "Joao Henriques", "Andrea Vedaldi", "Philip H. S. Torr"]
thumbnail_width: "0%"
highlight: false  # Set to true to highlight this paper
code_links:
  - text: "Code"
    url: "https://github.com/bertinetto/cfnet"
tldr: "The Correlation Filter is an algorithm that trains a linear template to discriminate between images and their translations. It is well suited to object tracking because its formulation in the Fourier domain provides a fast solution, enabling the detector to be re-trained once per frame. Previous works that use the Correlation Filter, however, have adopted features that were either manually designed or trained for a different task. This work is the first to overcome this limitation by interpreting the Correlation Filter learner, which has a closed-form solution, as a differentiable layer in a deep neural network. This enables learning deep features that are tightly coupled to the Correlation Filter. Experiments illustrate that our method has the important practical benefit of allowing lightweight architectures to achieve state-of-the-art performance at high framerates."
---
