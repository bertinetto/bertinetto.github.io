---
title: "Let’s Take This Online: Adapting Scene Coordinate Regression
Network Predictions for Online RGB-D Camera Relocalisation"
conference: "3DV (oral)"
year: 2019
arxiv: "https://arxiv.org/abs/1906.08744"
thumbnail: "/images/camera_reloc.png"
thumbnail_width: "25%"
highlight: false  # Set to true to highlight this paper
tldr: "Many applications require a camera to be relocalised online, without expensive offline training on the target scene.
Whilst both keyframe and sparse keypoint matching methods can be used online, the former often fail away from the
training trajectory, and the latter can struggle in textureless
regions. By contrast, scene coordinate regression (SCoRe)
methods generalise to novel poses and can leverage dense
correspondences to improve robustness, and recent work
has shown how to adapt SCoRe forests between scenes, allowing their state-of-the-art performance to be leveraged
online. However, because they use features hand-crafted for
indoor use, they do not generalise well to harder outdoor
scenes. Whilst replacing the forest with a neural network
and learning suitable features for outdoor use is possible,
the techniques used to adapt forests between scenes are unfortunately harder to transfer to a network context. In this
paper, we address this by proposing a novel way of leveraging a network trained on one scene to predict points in
another scene. Our approach replaces the appearance clustering performed by the branching structure of a regression
forest with a two-step process that first uses the network
to predict points in the original scene, and then uses these
predicted points to look up clusters of points from the new
scene. We show experimentally that our online approach
achieves state-of-the-art performance on both the 7-Scenes
and Cambridge Landmarks datasets, whilst running in under 300ms, making it highly effective in live scenarios."
---
