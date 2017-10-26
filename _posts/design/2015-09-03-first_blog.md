---
layout: page
#
# Content
#
subheadline: "Threat Research"
title: "Learning Detectors of Malicious Network Traffic"
teaser: "Malware is constantly evolving and changing. One way to identify malware is by analyzing the communication that the malware performs on the network."
categories:
  - Cognitive Research
tags:
  - Computer Networks
  - Malware
  - Information Technology
#
# Styling
#
header: no
image:
    title: ML-Figure5-550x727.png
    thumb: ML-Figure5-550x727.png
    homepage: ML-Figure5-550x727.png
    caption: Courtesy Cisco Blog
    caption_url: ""
---


Malware is constantly evolving and changing. One way to identify malware is by analyzing the communication that the malware performs on the network.<!--more--> Using machine learning, these traffic patterns can be utilized to identify malicious software. Machine learning faces two obstacles: obtaining a sufficient training set of malicious and normal traffic and retraining the system as malware evolves. This post will analyze an approach that overcomes these obstacles by developing a detector that utilizes domains (easily obtained from domain black lists, security reports, and sandboxing analysis) to train the system which can then be used to analyze more detailed proxy logs using statistical and machine learning techniques.

The network traffic analysis relies on extracting communication patterns from HTTP proxy logs (flows) that are distinctive for malware. Behavioral techniques compute features from the proxy log fields and build a detector that generalizes to the particular malware family exhibiting the targeted behavior.

The statistical features calculated from flows of malware samples are used to train a classifier of malicious traffic. This way, the classifier generalizes the information present in the flows and features and learns to recognize a malware behavior. We use features describing URL structures (such as URL length, decomposition, or character distribution), number of bytes transferred from server to client and vice versa, user agent, HTTP status, MIME type, port, etc. In our experimental evaluation, we used 305 features in total for each flow.


The first conceptual problem in using the standard supervised machine learning methods is the lack of sufficiently representative training set containing examples of malicious and legitimate communication. Providing security intelligence on individual proxy logs is expensive and does not scale with constantly evolving malware. The second problem is that the trained classifier is heavily dependent on the samples used in the training. Once a malware changes the behavior, the system needs to be retrained. With continuously rising number of malware variants, this becomes a major bottleneck in modern malware detection systems.

Both problems are addressed by considering groups of flows (also called bags). The bags are constructed for each user (or source IP) and contain all network communication with a particular hostname for a specific period of time.

Multiple Instance Learning
The robustness of the learned malicious flow detector directly depends on using a representative training set. Labeling individual flows in large quantities is difficult but the labels of domains can be easily obtained by leveraging internet domain black lists, security reports, and sandboxing analysis. Assigning labels based on the domains instead of the richer proxy logs with full target website URLs results in weak supervision in training: it is not known which flows in a positive bag are malicious and which are legitimate. The key advantage of this approach is that the requirements on the labeled samples (and their accuracy) are lower. This way, the system can train a detector that operates on individual proxy-logs while the training uses only domains to indicate malicious or legitimate traffic. Since the labeling is at the level of domains while the system trains a proxy log classifier, it can happen that some proxy logs in the positive bags (labeled positive based on the domain) can be negative (legitimate). The training algorithm correctly handles such cases.

The problem is formulated as weakly supervised learning since the bag labels are used to train a classifier of individual flows. We propose an algorithm based on the Multiple Instance Learning (MIL) that seeks for the Neyman-Pearson detector with a very low false positive rate that is necessary in the deployment of the system. The approach is illustrated in Figure 1.


This post was authored by Karel Bartos, Vojtech Franc, & Michal Sofka.
