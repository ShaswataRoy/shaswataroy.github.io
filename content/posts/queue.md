---
title: "From Boltzmann to Shannon"
date: 2026-02-07
math: true
---


In his key paper in 1865, *Clausius* defined entropy as this thermodynamic quantity and showed from empirical observations of engine inefficiencies and heat conduction that it seemed to maximize in isolated system. Almost a decade later, *Boltzmann* came up with his famous equation defining entropy as a measure of the number of accessible states.

<!--more-->

$$S = k_B \log \Omega$$


This has since become the standard way of thinking about it since it has consequences even out of thermodynamics. It introduced this way of bridging the microscopic world with all the particles and interactions to the macroscopic variables. Decades later, *Claude Shannon* came up with the same quantity while trying to define the uncertainty in communication. This would mean that entropy is a fundamental quantity that defines the amount of information in a system. In this article, I'll try to delve into entropy and how it naturally arises from counting discrete states and perhaps help develop this intuition behind it from a purely information theoretic point of view. 

<h3>Counting Possibilities</h3>

Let us start with a scenario in which we have $N$ consecutive events, each of which can be one of $k$ possibilities with the $i$-th possibility having a probability of $p_i$. For a very large number of events, we can expect that the number of times we see the $i$-th possibility is approximately $N p_i$. The total number of ways these events could have occured is given by the multinomial coefficient:

$$Ω = \frac{N!}{(N p_1)! (N p_2)! \cdots (N p_k)!}$$

Well that is for the number of possibilities that we can generate. Now what if we ask how many bits do we need to encode all these possibilities? Before we answer that, let's first define what a bit is. A bit is a digit that can take on any value between 0 and r-1, where r is the base of the number system. In most scenarios, we use base 2, so a bit can be either 0 or 1. If we have a string of bits of length L, then we can represent $2^L$ different possibilities. Therefore, to encode Ω possibilities, we would need:

$$L = \log_2 Ω$$

<figure style="text-align: center;">
	<img src="/figures/entropy.png" alt="entropy" width="60%" />
	<figcaption style="font-size: 1.05rem;">
		<strong>Figure 1</strong>: The number of arrangements of 3 distinct events can be mapped to 3 bits. However, as we can see some of the strings have not been utilized for encoding the events. In a world where we could store information in fractional bits we would achieve optimal storage with $\log_2 6$ bits.
	</figcaption>
</figure>


From here we can use Stirling's approximation $n! \approx \sqrt{2\pi n} \left(\frac{n}{e}\right)^n$. This approximation allows to simplify the expression for $L$ and we are able to derive the number of bits needed up to first order corrections,

$$
\begin{align*}
L &= \log_2 N! - \sum_{i=1}^k \log_2 (N p_i)! \\\\
& \approx N \log_2 N - N \sum_{i=1}^k p_i \left( \log_2 N + \log_2 p_i \right) \\\\
& = - N \sum_{i=1}^k p_i \log_2 p_i
\end{align*}
$$

We can go one step further and ask how many bits do we need on average to encode a single event? This is of course just the total number of bits divided by the number of events,

$$H = \frac{L}{N} \approx -\sum_{i=1}^k p_i \log_2 p_i$$


This is the Shannon entropy, the average number of bits needed to encode a single event given the event is observed from the distribution defined by the probabilities $p_i$. Rather than being a measure of disorder, it is a measure of uncertainty. If all the events are equally likely, then the entropy is maximized and we need the most bits to encode them. If one event is much more likely than the others, then the entropy is lower and we need fewer bits to encode it.
We can also look into the continuum limit where we have a continuous distribution of events $x ∈ \mathcal{X}$ and would be able to define the entropy as $H(x) = -\int_\mathcal{X} p(x) \log_2 p(x) dx$. Of course, base 2 is not necessary but it relates to our common understanding of how computers binarize information.


<h3>Considering evidence</h3>

<figure style="text-align: center;">
	<img src="/figures/evidence_detective.png" alt="evidence" width="100%" />
	<figcaption style="font-size: 1.05rem;">
		<strong>Figure 2</strong> With a prior belief that the distribution in $q(x)$, the detective investigates a distribution $p(x)$. His final conclusion is an amalgamation of the two.
	</figcaption>
</figure>

We all have biases. Prior beliefs about what the world is like. When trying to make sense we rely on these beliefs to gain context of our observations. In the same way, the detective tries to make sense of a distribution $p(x)$, while having prior beliefs about the world $q(x)$. Again considering $N$ events, with the $i$-th event having a probability of $p_i$. Now the detective may ask: "What's the probability of having observe these events given my prior beliefs?"  Now there are two possible meanings to this question.

<h4> Ordered Events </h4>

The detective could be asking what the probability of observing these **events in this particular order** is. This is given by the product of the probabilities of each event,

$$P = \prod_{i=1}^k  q_i^{Np_i} = \frac{1}{\Omega^o_{p||q}}$$

Where $\Omega_{p|q}$ is a hypothetical event space of all the different distributions that could have led to the observation. No if we want to ask how many bits per event do we need to encode this space, we get what is known as the cross entropy,

$$H(p,q) = \frac{\log_2 \Omega^o_{p||q}}{N} = -\sum_{i=1}^k p_i \log_2 q_i$$

<h4> Unordered Events </h4>

In reality, the detective probably doesn't care about the order of the events. He just wants to know how likely it is that these events could have been generated from his prior beliefs. In this case, we need to consider all the different arrangements of the events that could have led to the observation. This is given by the multinomial coefficient,

$$P = \frac{N!}{(N p_1)! (N p_2)! \cdots (N p_k)!} q_i^{Np_i} = = \frac{1}{\Omega^u_{p||q}}$$

And the average number of bits encoding the space of all the different arrangements gives us the Kullback-Leibler divergence,

$$D_{KL}(p||q) = \frac{\log_2 \Omega^u_{p||q}}{N} = \sum_{i=1}^k p_i \log_2 \frac{p_i}{q_i}$$

<div class="post-summary">
<div style="text-align: center;">
<strong>Shannon Entropy</strong> <br>
$H(x) = -\int_\mathcal{X} p(x) \log p(x) dx$ <br><br>
<strong>Cross Entropy</strong> <br>
$H(p,q) = -\int_\mathcal{X} p(x) \log q(x) dx$ <br><br>
<strong>Kullback-Leibler Divergence</strong> <br>
$D_{KL}(p||q) = -\int_\mathcal{X} p(x) \log \frac{p_(x)}{q_(x)} dx$
</div>
</div>

It is common to think of the KL divergence as a measure of how different two distributions are.
Intuitively it is a measure of the space of all different distributions that are as similar as $q$ when it comes to explaining data generated from $p$. $D_{KL}(p||p)$ is zero as there is only one distribution that can explain data generated from $p$ as good as $p$ itself.


 




