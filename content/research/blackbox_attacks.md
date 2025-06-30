---
title: "Attacking deep networks with surrogate-based adversarial black-box methods is easy"
conference: "ICLR"
year: 2022
show_year: false
arxiv: "https://arxiv.org/abs/1606.09549"
authors: ["Nicholas A. Lord", "Romain Mueller", "Luca Bertinetto"]
thumbnail: "/images/gfcs.jpg"
thumbnail_width: "25%"
highlight: true
code_links:
  - text: "Code"
    url: "https://github.com/fiveai/GFCS"
video_links:
  - text: "Video"
    url: "https://www.youtube.com/watch?v=gKzwEq6j5C8"
post_links:
  - text: "Blog Post"
    url: "https://medium.com/fiveai/many-deep-nets-are-more-similar-than-you-might-think-34e9bc3c6a2e"
tldr: "A recent line of work on black-box adversarial attacks has revived the use of transfer from surrogate models by integrating it into query-based search. However, we find that existing approaches of this type underperform their potential, and can be overly complicated besides. Here, we provide a short and simple algorithm which achieves state-of-the-art results through a search which uses the surrogate network's class-score gradients, with no need for other priors or heuristics. The guiding assumption of the algorithm is that the studied networks are in a fundamental sense learning similar functions, and that a transfer attack from one to the other should thus be fairly 'easy'. This assumption is validated by the extremely low query counts and failure rates achieved: e.g. an untargeted attack on a VGG-16 ImageNet network using a ResNet-152 as the surrogate yields a median query count of 6 at a success rate of 99.9%."
---
