# Research figure provenance — V3

Figures are author-provided research material or originals from the author’s public preprint. No generative editing was applied. Full-size local images are lossless WebP conversions of the supplied PNG or the PDF’s embedded figure bitmap. Preview images are resized; labels, comparison methods, axes, values and panel order are retained. The copyright and reuse terms of each source remain applicable.

The complete IEEE institutional download PDFs are deliberately not redistributed here. The Pattern Recognition article states CC BY 4.0. Neither the IEEE figure excerpts nor the arXiv illustrations are relabelled as CC BY.

## VISTA

Vision-Language Integrated Semantic Triage Architecture for Online Face Clustering in Long Videos
Jiashu Liao, Joanne Garde-Hansen, Sanjay Sharma, Tanaya Guha

This page uses the author-supplied VISTA manuscript and five supplied figure files. The method overview is the author-supplied presentation figure, not a modified reproduction of manuscript Figure 1. Quantitative values below follow the controlled comparison in Table 1.

### Method overview

Author-supplied VISTA figure · Liao, Garde-Hansen, Sharma & Guha, ACM MM 2026. <a href="https://doi.org/10.1145/3767308.3835422" target="_blank" rel="noopener noreferrer">Paper DOI ↗</a>

Source: `method_visual.png`
Web reference: `assets/papers/vista-method.webp`

Per-crop features, within-shot tracks, and inter-shot association. Symbolic Semantic Representation (SSR) stabilises noisy predictions; three-zone triage separates reject, arbitrate, and merge decisions.

### Controlled benchmark comparison

Author-supplied VISTA figure · Liao, Garde-Hansen, Sharma & Guha, ACM MM 2026. <a href="https://doi.org/10.1145/3767308.3835422" target="_blank" rel="noopener noreferrer">Paper DOI ↗</a>

Source: `controlled_results.png`
Web reference: `assets/papers/vista-results.webp`

Original author-provided comparison of COFC and VISTA on TBBT, Buffy, and Sherlock. WCP and NMI increase on all three datasets; Sherlock ID_Acc decreases from 71.27 to 68.10.

### Qualitative comparison across a full episode

Author-supplied VISTA figure · Liao, Garde-Hansen, Sharma & Guha, ACM MM 2026. <a href="https://doi.org/10.1145/3767308.3835422" target="_blank" rel="noopener noreferrer">Paper DOI ↗</a>

Source: `sherlock_timeline_preview.png`
Web reference: `assets/papers/vista-timeline.webp`

Ground truth, COFC, and VISTA timelines. Colours denote predicted clusters. The figure illustrates a change in error profile; it is not evidence that every identity-continuity error disappears.

### Focused timeline comparison

Author-supplied VISTA figure · Liao, Garde-Hansen, Sharma & Guha, ACM MM 2026. <a href="https://doi.org/10.1145/3767308.3835422" target="_blank" rel="noopener noreferrer">Paper DOI ↗</a>

Source: `sherlock_focus_preview.png`
Web reference: `assets/papers/vista-focus.webp`

Author-provided two-track view with a matched interval highlighted. Read together with the full-episode timeline and the quantitative purity–continuity trade-off.

### Similarity distributions & GMM fitting

Author-supplied VISTA figure · Liao, Garde-Hansen, Sharma & Guha, ACM MM 2026. <a href="https://doi.org/10.1145/3767308.3835422" target="_blank" rel="noopener noreferrer">Paper DOI ↗</a>

Source: `gmm_similarity_distribution.png`
Web reference: `assets/papers/vista-gmm.webp`

Author-provided bimodal fitting plots for TBBT, Buffy, Sherlock, and the pooled scores. Threshold markers belong to this diagnostic figure; they are not a claim that a single fixed threshold is used throughout every stream.

## DisentangleFormer

Spatial-Channel Decoupling for Multi-Channel Vision
Jiashu Liao, Pietro Liò, Marc de Kamps, Duygu Sarikaya

Figures and descriptions on this page refer specifically to arXiv:2512.04314v1. This work is presented as a public preprint, not as an accepted conference or journal article. Original figure labels and model names are retained.

### Figure 3 · Network architecture

Liao, Liò, de Kamps & Sarikaya · arXiv:2512.04314v1, 2025. <a href="https://arxiv.org/html/2512.04314v1" target="_blank" rel="noopener noreferrer">Original preprint ↗</a>

Source: `https://arxiv.org/html/2512.04314v1/Img/CVPRNewFigure.jpg`
Web reference: `https://arxiv.org/html/2512.04314v1/Img/CVPRNewFigure.jpg`

Embedding is followed by parallel Channel Transformer and Spatial Transformer paths. STE fuses the streams before multi-scale processing.

### Figure 1 · Pavia University classification maps

Liao, Liò, de Kamps & Sarikaya · arXiv:2512.04314v1, 2025. <a href="https://arxiv.org/html/2512.04314v1" target="_blank" rel="noopener noreferrer">Original preprint ↗</a>

Source: `https://arxiv.org/html/2512.04314v1/Img/CVPRPavia22.jpg`
Web reference: `https://arxiv.org/html/2512.04314v1/Img/CVPRPavia22.jpg`

Original visual comparison of the parallel model with the SerialCTST and SerialSTCT alternatives.

### Figure 2 · Canonical correlation analysis

Liao, Liò, de Kamps & Sarikaya · arXiv:2512.04314v1, 2025. <a href="https://arxiv.org/html/2512.04314v1" target="_blank" rel="noopener noreferrer">Original preprint ↗</a>

Source: `https://arxiv.org/html/2512.04314v1/Img/CVPRCCA.jpg`
Web reference: `https://arxiv.org/html/2512.04314v1/Img/CVPRCCA.jpg`

CCA plots compare the parallel architecture with the two serial baselines across three hyperspectral datasets.

## Mask Rotate / RMAGAN

Self-supervised random mask attention GAN in tackling pose-invariant face recognition
Jiashu Liao, Tanaya Guha, Victor Sanchez

Figures 1, 2, 3, 4, and 7 are extracted from the supplied published PDF, Pattern Recognition 159 (2025), 111112. © 2024 The Authors, CC BY 4.0. Existing comparison-method labels are preserved; these figures do not imply that all displayed baselines were developed by this author.

### Figure 1 · Training and testing

Liao, Guha & Sanchez · Pattern Recognition 159 (2025), 111112 · © 2024 The Authors, CC BY 4.0. <a href="https://doi.org/10.1016/j.patcog.2024.111112" target="_blank" rel="noopener noreferrer">Source paper ↗</a>

Source: `343256.pdf` · PDF page 4
Web reference: `assets/papers/mask-rotate-framework.webp`

Training uses Random Mask inputs. During testing, a pre-trained neural renderer first rotates the face, RMAGAN completes missing texture, and DifFace upsamples the result.

### Figure 2 · RMAGAN architecture

Liao, Guha & Sanchez · Pattern Recognition 159 (2025), 111112 · © 2024 The Authors, CC BY 4.0. <a href="https://doi.org/10.1016/j.patcog.2024.111112" target="_blank" rel="noopener noreferrer">Source paper ↗</a>

Source: `343256.pdf` · PDF page 6
Web reference: `assets/papers/mask-rotate-network.webp`

A Siamese encoder processes the masked input and its horizontal flip. Facial landmarks guide the Attention Selective Blocks.

### Figure 3 · LFW qualitative comparison

Liao, Guha & Sanchez · Pattern Recognition 159 (2025), 111112 · © 2024 The Authors, CC BY 4.0. <a href="https://doi.org/10.1016/j.patcog.2024.111112" target="_blank" rel="noopener noreferrer">Source paper ↗</a>

Source: `343256.pdf` · PDF page 8
Web reference: `assets/papers/mask-rotate-lfw.webp`

Original LFW samples, including the Mask Rotate variant without DifFace and the full inference pipeline.

### Figure 4 · CelebA-HQ qualitative comparison

Liao, Guha & Sanchez · Pattern Recognition 159 (2025), 111112 · © 2024 The Authors, CC BY 4.0. <a href="https://doi.org/10.1016/j.patcog.2024.111112" target="_blank" rel="noopener noreferrer">Source paper ↗</a>

Source: `343256.pdf` · PDF page 8
Web reference: `assets/papers/mask-rotate-celebahq.webp`

Original input and output examples for Mask Rotate, OSTec, and RR. These are selected qualitative examples, not an aggregate benchmark.

### Figure 7 · Rotation capability

Liao, Guha & Sanchez · Pattern Recognition 159 (2025), 111112 · © 2024 The Authors, CC BY 4.0. <a href="https://doi.org/10.1016/j.patcog.2024.111112" target="_blank" rel="noopener noreferrer">Source paper ↗</a>

Source: `343256.pdf` · PDF page 10
Web reference: `assets/papers/mask-rotate-poses.webp`

The original pose grid includes upward, downward, and yaw rotations. The paper notes reduced performance at poses differing by 90° or more from the input.

## FRGAN

Self-supervised Frontalization and Rotation GAN with Random Swap for Pose-invariant Face Recognition
Jiashu Liao, Victor Sanchez, Tanaya Guha

Figures 1–3 are extracted from the supplied author-accepted manuscript (276935.pdf). The repository cover is not part of the paper page numbering. Author order follows the paper title page: Liao, Sanchez, Guha. © 2022 IEEE; figure rights remain with the original rights holders. The full licensed PDF is not redistributed in this website bundle.

### Figure 1 · FRGAN framework

Liao, Sanchez & Guha · ICIP 2022 · © 2022 IEEE. Extracted from the author-accepted manuscript. <a href="https://doi.org/10.1109/ICIP46576.2022.9897944" target="_blank" rel="noopener noreferrer">Source paper ↗</a>

Source: `276935.pdf` · PDF page 3
Web reference: `assets/papers/frgan-framework.webp`

Frontalization, pre-trained rotation, and discrimination. Independent Random Swap operations are applied to eye, nose, and mouth regions before the discriminator.

### Figure 2 · LFW visual results

Liao, Sanchez & Guha · ICIP 2022 · © 2022 IEEE. Extracted from the author-accepted manuscript. <a href="https://doi.org/10.1109/ICIP46576.2022.9897944" target="_blank" rel="noopener noreferrer">Source paper ↗</a>

Source: `276935.pdf` · PDF page 4
Web reference: `assets/papers/frgan-lfw.webp`

The original method comparison; each row represents one example identity and all baseline labels are retained.

### Figure 3 · Random Swap ablation

Liao, Sanchez & Guha · ICIP 2022 · © 2022 IEEE. Extracted from the author-accepted manuscript. <a href="https://doi.org/10.1109/ICIP46576.2022.9897944" target="_blank" rel="noopener noreferrer">Source paper ↗</a>

Source: `276935.pdf` · PDF page 5
Web reference: `assets/papers/frgan-ablation.webp`

Rows show the input, frontalization without Random Swap, and frontalization with Random Swap, respectively.

## Attention Selective Network

Attention Selective Network for Face Synthesis and Pose-Invariant Face Recognition
Jiashu Liao, Alex Kot, Tanaya Guha, Victor Sanchez

Figures 1–3 are extracted from the supplied IEEE ICIP 2020 paper. © 2020 IEEE. The full licensed PDF and its institutional download copy are not redistributed. Original axis, angle, and method labels are retained. This work is supervised, distinct from the later self-supervised methods.

### Figure 1 · Attention Selective Network

Liao, Kot, Guha & Sanchez · ICIP 2020 · © 2020 IEEE. <a href="https://doi.org/10.1109/ICIP40778.2020.9190677" target="_blank" rel="noopener noreferrer">Source paper ↗</a>

Source: `Attention_Selective_Network_For_Face_Synthesis_And_Pose-Invariant_Face_Recognition.pdf` · PDF page 2
Web reference: `assets/papers/asn-network.webp`

Two generator encoders process appearance and pose heatmaps. Attention Selective Blocks combine the pathways; pose and image discriminators provide complementary signals.

### Figure 2 · Adaptive symmetry motivation

Liao, Kot, Guha & Sanchez · ICIP 2020 · © 2020 IEEE. <a href="https://doi.org/10.1109/ICIP40778.2020.9190677" target="_blank" rel="noopener noreferrer">Source paper ↗</a>

Source: `Attention_Selective_Network_For_Face_Synthesis_And_Pose-Invariant_Face_Recognition.pdf` · PDF page 3
Web reference: `assets/papers/asn-symmetry.webp`

The schematic relates the visible width of a rotated face to its frontal width. It motivates the pose-dependent weighting of the adaptive symmetry loss.

### Figure 3 · Synthesis across pose angles

Liao, Kot, Guha & Sanchez · ICIP 2020 · © 2020 IEEE. <a href="https://doi.org/10.1109/ICIP40778.2020.9190677" target="_blank" rel="noopener noreferrer">Source paper ↗</a>

Source: `Attention_Selective_Network_For_Face_Synthesis_And_Pose-Invariant_Face_Recognition.pdf` · PDF page 4
Web reference: `assets/papers/asn-results.webp`

Original profile inputs, frontal ground truth, ASN, CAPGGAN, and TPGAN outputs. Every labelled pose column and method row is retained.
