---
title: "Queues and Genes"
date: 2025-09-12
math: true
---

<div style="text-align:center;">
    <img src="/figures/queue.jpg" alt="Fidelity as a function of the number of most important features and edges topk" width="500"/>
</div>


Queueing theory provides a mathematical framework for analyzing systems where entities wait for service. In biological systems, particularly gene transcription, this framework elegantly models the stochastic processes governing RNA production.

<!--more-->

The stochastic nature of transcription—including random promoter binding, variable elongation rates, and transcriptional bursting—mirrors the probabilistic arrivals and service times in classical queueing models. This connection allows researchers to predict mRNA distributions, analyze transcriptional noise, and understand how cellular resources affect gene expression dynamics.



The Kendall notation **A/S/c/K/N/D** is a standard way to describe queueing systems:

- **A**: Arrival process (e.g., M for Markovian/Poisson, D for deterministic)
- **S**: Service time distribution (e.g., M for exponential, G for general)
- **c**: Number of servers
- **K**: System capacity (maximum number in system)
- **N**: Population size (calling population)
- **D**: Queue discipline (e.g., FIFO, LIFO, priority)

Common examples: M/M/1 (single-server queue with Poisson arrivals and exponential service), M/G/∞ (infinite servers with general service times).



<h3>Transcription</h3>
$$ U_i \underset{k_{j,i}}{\overset{k_{i,j}}{\rightleftharpoons}} U_j, \quad U_i \xrightarrow{\rho_{i,j}} U_j + M_1, \quad i,j = 1,\ldots,S$$

<h3>RNA Degradation</h3>
$$ M_i \underset{d_{j,i}}{\overset{d_{i,j}}{\rightleftharpoons}} M_j, \quad M_i \xrightarrow{\lambda_i} \emptyset, \quad i,j = 1,\ldots,R$$
 
