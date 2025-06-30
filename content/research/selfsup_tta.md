---
title: "Self-supervised Test-time Adaptation on Video Data"
conference: "WACV"
year: 2022
show_year: false
arxiv: "https://openaccess.thecvf.com/content/WACV2022/html/Azimi_Self-Supervised_Test-Time_Adaptation_on_Video_Data_WACV_2022_paper.html"
authors: ["Fatemeh Azimi", "Sebastian Palacio", "Federico Raue", "Jörn Hees", "Luca Bertinetto", "Andreas Dengel"]
thumbnail_width: "0%"
highlight: false
tldr: "In typical computer vision problems revolving around video data, pre-trained models are simply evaluated at test time, without adaptation. This general approach clearly cannot capture the shifts that will likely arise between the distributions from which training and test data have been sampled. Adapting a pre-trained model to a new video encountered at test time could be essential to avoid the potentially catastrophic effects of such shifts. However, given the inherent impossibility of labeling data only available at test-time, traditional fine-tuning techniques cannot be leveraged in this highly practical scenario. This paper explores whether the recent progress in test-time adaptation in the image domain and self-supervised learning can be leveraged to adapt a model to previously unseen and unlabelled videos presenting both mild (but arbitrary) and severe covariate shifts. In our experiments, we show that test-time adaptation approaches applied to self-supervised methods are always beneficial, but also that the extent of their effectiveness largely depends on the specific combination of the algorithms used for adaptation and self-supervision, and also on the type of covariate shift taking place."
---
