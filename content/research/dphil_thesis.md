---
title: "Learning (to learn) from few examples"
conference: "PhD (DPhil) Thesis - University of Oxford"
year: 2019
show_year: false
arxiv: "https://ora.ox.ac.uk/objects/uuid:1f93b8a0-9a51-428b-9214-ce563161085a"
authors: ["Luca Bertinetto"]
thumbnail: "/images/oxford_logo.png"
thumbnail_width: "10%"
highlight: false  # Set to true to highlight this paper
tldr: "
The availability of large labelled datasets has played a crucial role in the recent success of deep neural networks. However, there are many situations in which training data is scarce. For instance, in the case of object tracking, such a limitation arises directly from the definition of the problem, which requires an estimate of the position of an object of interest in every frame of a video with the sole supervision of a bounding box in the first frame. Another scenario which can be doomed by data scarcity is classification. For example, one might want to identify the species of a rare insect with a single reference image, or train a tumour classification system from a few labelled MRI scans. For both tracking and classification, we propose techniques that sidestep per-task data scarcity by leveraging a large number of small episodes, each characterised by a limited training set. This strategy is particularly novel for tracking, for which for many years the standard approach has been to train a discriminative model exclusively online, while the video is streaming. Moreover, we examine how this general approach can be framed as 'learning to learn', in the sense that the knowledge distilled within a training task is accrued and used across tasks. We show how such a framework allows one to devise systems that can be trained with a small amount of per-task data while also being dynamically tailored to the problem at hand. From a practical point of view, the proposed methods have a common focus on simplicity, efficiency and speed, achieved by exploiting the shape or redundancies of the data."
---
