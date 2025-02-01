---
title: "Fully-convolutional siamese networks for object tracking"
conference: "ECCV workshops"
year: 2016
arxiv: "https://arxiv.org/abs/1606.09549"
thumbnail: "/images/siamfc.png"
thumbnail_width: "25%"
highlight: true  # Set to true to highlight this paper
tldr: "This work introduced a real-time object tracking framework using fully-convolutional Siamese (aka contrastive) networks trained offline on large-scale video data. By learning a generic similarity function between exemplar templates and search regions, the method eliminated traditional online model adaptation while achieving very competitive results at high framerates (~80 fps). Its key innovation – dense cross-correlation via bilinear layers for efficient sliding-window evaluation – became foundational for subsequent real-time trackers. The demonstration that deep similarity learning could generalize across video domains without test-time fine-tuning influenced the tracking community's shift toward offline-trained architectures, establishing an important baseline for balancing accuracy and speed in visual tracking systems."
---
