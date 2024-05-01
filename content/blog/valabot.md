+++
title = "ValaBot: an AI coding assistant fine-tuned for Vala"
date = "2024-05-01"
description="An AI coding assistant fine-tuned for Vala and Gtk"

[extra]
authors = ["Sam Cowen"]
+++

# Introduction

As a programmer, I've been impressed by AI coding assistants such as Github Copilot and Codeium. 
I've found these tools have accelerated my productivity and allowed me to complete projects that have long been in the 'todo' pile. 
These tools for me are basically glorified auto-completers. 
They save me a little time in typing, but most of all, they quite often complete a line of code correctly which saves me having to pause and dig through documentation. 
These little interruptions of having to go read up on parameters for a functions, or how-to do something common and trivial really add up to a lot of wasted time, and this is what AI tools are excellent at solving.

However, I've found that Copilot's suggestions can be limited when working with the Vala programming language, often getting confused with Java and C# code, and not particuarly well trained on common Vala libraries. 
This inspired me to explore how I could build upon the Copilot concept, creating a more effective AI coding assistant tailored specifically to Vala.

# The Problem

While GitHub Copilot has revolutionized code completions, its suggestions can be less accurate for niche programming languages like Vala. 
This motivated me to investigate how I could refine the AI's understanding of Vala through targeted fine-tuning.

# The Solution

To elevate the Copilot concept, I leveraged the powerful Deepseek Coder model, trained from scratch by Deepseek AI on 2 trillion tokens sourced from GitHub. 
This model significantly outperforms other open-source coding models, such as Codellama. 
I chose the Deepseekcoder-6.7b-base model as the foundation for fine-tuning because of its strengths, particularly its training on Java and C# – languages syntactically close to Vala. 
This allowed me to build upon its existing capabilities and adapt it to the specific needs of Vala. 
Using the Fill-in-the-Middle (FIM) technique, I fine-tuned the model on Vala programming language datasets. 
This involved downloading as many Vala projects as I could find from GitHub, extracting the Vala source files and splitting them into ~40 line segments. 
I then used Llama3 to create logical and predictable "holes" in each segment, which were then used to create the FIM dataset. 
This data preparation process took 96 hours of GPU time, utilizing 2 RX6800 cards over a weekend. 
The resulting dataset was cleaned to remove non-code elements, such as license headers, and personal identifiable information like names and email addresses.

# The Training

The fine-tuning process took 10 hours on an RTX 3090, resulting in a model specifically tailored to Vala and popular libraries like Gee and Gtk.

# The Result

The outcome was a model that is more helpful and productive for Vala-related projects, building upon the foundations laid by GitHub Copilot. By fine-tuning Deepseek Coder, I was able to create a more accurate and effective AI coding assistant that understands the nuances of the Vala programming language.

# Conclusion

In this post, I shared my experience fine-tuning Deepseek Coder for Vala, demonstrating how targeted fine-tuning can enhance the Copilot concept. This project highlights the potential of AI fine-tuning for creating more effective coding assistants, and I hope it will inspire others to explore the possibilities of AI-assisted coding.
