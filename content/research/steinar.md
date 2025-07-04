---
title: "On episodes, prototypical networks, and few-shot learning"
conference: "NeurIPS"
year: 2021
show_year: false
arxiv: "https://arxiv.org/abs/2012.09831"
authors: ["Steinar Laenen", "Luca Bertinetto"]
thumbnail: "/images/onepisodes.jpg"
thumbnail_width: "25%"
highlight: false  # Set to true to highlight this paper
code_links:
  - text: "Code"
    url: "https://github.com/fiveai/on-episodes-fsl"
tldr: "Episodic learning is a popular practice among researchers and practitioners interested in few-shot learning.It consists of organising training in a series of learning problems (or episodes), each divided into a small training and validation subset to mimic the circumstances encountered during evaluation.But is this always necessary? In this paper, we investigate the usefulness of episodic learning in methods which use nonparametric approaches, such as nearest neighbours, at the level of the episode.For these methods, we not only show how the constraints imposed by episodic learning are not necessary, but that they in fact lead to a data-inefficient way of exploiting training batches.We conduct a wide range of ablative experiments with Matching and Prototypical Networks, two of the most popular methods that use nonparametric approaches at the level of the episode.Their 'non-episodic' counterparts are considerably simpler, have less hyperparameters, and improve their performance in multiple few-shot classification datasets."
---
