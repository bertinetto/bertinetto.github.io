---
title: "Hierarchical Interaction Network for Video Object Segmentation from Referring Expressions"
conference: "BMVC"
year: 2021
show_year: false
arxiv: "https://www.bmvc2021-virtualconference.com/conference/papers/paper_0386.html"
authors: ["Zhao Yang", "Yansong Tang", "Luca Bertinetto", "Hengshuang Zhao", "Philip Torr"]
thumbnail_width: "0%"
highlight: false
tldr: "In this paper, we investigate the problem of video object segmentation from referring expressions (VOSRE). Conventional methods typically perform multi-modal fusion based on linguistic features and the visual features extracted from the top layer of the visual encoder, which limits these models' ability to represent multi-modal inputs at different semantic and spatial granularity levels. To address this issue, we present an end-to-end hierarchical interaction network (HINet) for the VOSRE problem. Our model leverages the feature pyramid produced by the visual encoder to generate multiple levels of multi-modal features. This allows more flexible representation of various linguistic concepts (e.g., object attributes and categories) in different levels of the multi-modal features. Moreover, we further extract signals of moving objects from optical flow input, and utilize them as complementary cues for highlighting the referent and suppressing the background with a motion gating mechanism. In contrast to previous methods, this strategy allows our model to make online predictions without requiring the whole video as input. Despite its simplicity, our proposed HINet improves over the previous state of the art on the DAVIS-16, DAVIS-17, and J-HMDB datasets for the VOSRE task, demonstrating its effectiveness and generality."
---
