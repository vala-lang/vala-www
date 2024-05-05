+++
title = "ValaBot: an AI coding assistant fine-tuned for Vala"
date = "2024-05-01"
description="An AI coding assistant fine-tuned for Vala and Gtk"

[extra]
authors = ["Sam Cowen"]
+++

# Introduction

As a programmer, I've been impressed by AI coding assistants like GitHub Copilot and Codeium, which have significantly boosted my productivity. GitHub Copilot, in particular, has helped me clear long-standing items from my to-do list by saving time on typing and often completing lines of code accurately. 
This efficiency means I spend less time pausing to look up documentation for function parameters or trivial coding tasks — time that really adds up. 
These tools excel at reducing such disruptive interruptions.

However, I've encountered limitations with Copilot while working with the Vala programming language. 
Its suggestions often get muddled with similar languages like Java and C#, and it lacks training on the more common Vala libraries. 
This challenge inspired me to enhance the Copilot concept by creating an AI coding assistant that is finely tuned to better serve the specific needs of Vala developers.

# The Problem

While GitHub Copilot has revolutionized code completions, its suggestions can be less accurate for niche programming languages like Vala. 
Copilot will often confuse Vala with C# or Java, and it'll suggest lengthy segments of incorrect code, which limits how often I'll be able to accept a completion.  
This motivated me to investigate how I could refine the AI's understanding of Vala through targeted fine-tuning.

# The Solution

I began with an open source Large Language Model that had been trained on source code - the powerful Deepseek Coder 6.7b model. This model has been trained from scratch by Deepseek AI on 2 trillion tokens sourced from GitHub. 
Deepseek Coder significantly outperforms other open-source coding models, such as Codellama. 
I chose the Deepseekcoder-6.7b-base model as the foundation for fine-tuning because of its great benchmark performance and also because it was trained on Java and C# – languages syntactically close to Vala. 
This allowed me to build upon its existing capabilities and adapt it to the specific needs of Vala. 

I fine-tuned the model on Vala programming language datasets. 
This involved downloading as many Vala projects as I could find from GitHub, extracting the Vala source files and splitting them into ~40 line segments. 
I then used Llama3 to create logical and predictable "holes" in each segment, which were then used to create the FIM (fill-in-the-middle) dataset. 
This data preparation process took 96 hours of GPU time using my quad-RX6800 machine over a weekend. 
The resulting dataset was cleaned to remove non-code elements, such as license headers, and personal identifiable information like names and email addresses, and some old auth secrets that should never have been published! 

# The Training

The fine-tuning process took 10 hours on an RTX 3090. The result was a LoRA, which was merged back into the base model, converted to GGUF and quantised to q8_0 which is the format required by TabbyML. 

# The Result

The outcome was a model that is more helpful and productive for Vala-related projects. By fine-tuning Deepseek Coder, I was able to create a more accurate and effective AI coding assistant that understands the nuances of the Vala programming language.

The model is hosted on Huggingface. <https://huggingface.co/scowen/deepseek-coder-6.7b-vala/tree/main>

It can be used in VSCode, VIM and other popular IDEs with TabbyML. The complete instructions, training scripts and dataset are available here: <https://github.com/supercamel/ValaBot>

# Licensing

There has been some discussion about the issue of licensing and fair use of GPL code in particular to fine tune a language model. The training data is quite obviously derived from projects under various licenses, the most restrictive of which is the GPL. As a derived work, the training data must also be GPL'd. One might even argue that the LoRA is a derived work and must be GPL'd. None of this should be particularly concerning to anybody. 

As far as the code produced by the model goes, I believe it is owned by the user of the model. Whoever provides the prompts owns the output and may license it as they wish. I base this belief on the fact that while the GPL doesn't explicitly address AI, the FSF does have this to say
```
 The output of a program is not, in general, covered by the copyright on the code of the program. So the license of the code of the program does not apply to the output ...
```
Source: <https://www.gnu.org/licenses/gpl-faq.en.html#WhatCaseIsOutputGPL>

While the model has been trained on GPL'd code, I consider the code that is produced by the model to be an output. It simply won't produce a full screen of code from a GPL'd project. The training data essentially just biases the model to produce code that is a bit more like Vala than the Java and C# that it is trained on - it won't accurately reproduce the GPL'd code it was fine-tuned on in any meaningful quantity. 

# Conclusion

In this blog post, I've shared my experience with fine-tuning the Deepseek Coder for the Vala programming language, demonstrating how targeted adjustments can significantly enhance AI coding assistants. This project is just the beginning. I aim to continue developing models specifically optimized for Vala to support the Vala developer community. With the release of new base models, such as CodeQwen 7B, there are exciting possibilities for further advancements. Through this work, I hope to highlight the potential of AI fine-tuning in creating more effective coding assistants and inspire others to explore the possibilities of AI-assisted coding.

Get started with ValaBot here: <https://github.com/supercamel/ValaBot>

