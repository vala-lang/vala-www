+++
title = "ValaBot: an AI coding assistant fine-tuned for Vala"
date = "2024-05-09"
description="An AI coding assistant fine-tuned for Vala and Gtk"

[extra]
authors = ["Sam Cowen"]
+++

## Enhancing AI Coding Assistants for Vala Developers

As a programmer, I've been impressed by AI coding assistants like GitHub Copilot and Codeium, which have significantly boosted my productivity. These tools excel at reducing disruptive interruptions, saving time on typing, and often completing lines of code accurately. However, I've encountered limitations with Copilot while working with the Vala programming language. Its suggestions often get muddled with similar languages like Java and C#, and it lacks training on the more common Vala libraries. 

Like many other developers, I'm also dissatisfied with the dominance of Github Copilot and that open source code has been monetized without attribution or consideration for the original authors (some of whom now pay for the service). 

This challenge inspired me to enhance the Copilot concept by creating an AI coding assistant that is finely tuned to provide a viable and superior alternative that caters for the specific needs of Vala developers. I began with an open-source Large Language Model that had been trained on source code - the powerful Deepseek Coder 6.7b model. This model has been trained from scratch by Deepseek AI on 2 trillion tokens sourced from GitHub. Deepseek Coder significantly outperforms other open-source coding models, such as Codellama.

I chose the Deepseekcoder-6.7b-base model as the foundation for fine-tuning because of its great benchmark performance and also because it was trained on Java and C# – languages syntactically close to Vala. This allowed me to build upon its existing capabilities and adapt it to the specific needs of Vala.

## Fine-Tuning for Vala

I fine-tuned the model on Vala programming language datasets. This involved downloading as many Vala projects as I could find from GitHub, extracting the Vala source files, and splitting them into ~40 line segments. I then used Llama3 to create logical and predictable "holes" in each segment, which were then used to create the FIM (fill-in-the-middle) dataset. This data preparation process took 96 hours of GPU time using my quad-RX6800 machine over a weekend. The resulting dataset was cleaned to remove non-code elements, such as license headers, and personal identifiable information.

## The Training

The fine-tuning process took 10 hours on an RTX 3090. The result was a LoRA, which was merged back into the base model, converted to GGUF, and quantized to q8_0, which is the format required by TabbyML.

## The Result

The outcome was a model that is more helpful and productive for Vala-related projects. By fine-tuning Deepseek Coder, I was able to create a more accurate and effective AI coding assistant that understands the nuances of the Vala programming language. The model is hosted on Huggingface (<https://huggingface.co/scowen/deepseek-coder-6.7b-vala/tree/main>). It can be used in VSCode, VIM, and other popular IDEs with TabbyML. The complete instructions, training scripts, and dataset are available on GitHub (<https://github.com/supercamel/ValaBot>).

## Licensing and Fair Use

As a project rooted in the principles of Free and Open-Source Software (FOSS), I believe in promoting freedom, community, and sharing knowledge. To facilitate collaboration and innovation, I've made the following resources publicly available:

* The fine-tuned model weights are hosted on Hugging Face for anyone to access and utilize in a TabbyML or other deployment.
* The training scripts and dataset preparation process are open-sourced on GitHub, providing a transparent and reproducible framework for others to build upon.
* A comprehensive list of repositories used during the fine-tuning process is available on GitHub, ensuring that contributors and users can easily identify and explore the sources that made this project possible.

I hope that this openness will pave the way for further advancements and refinements, ultimately benefiting the Vala developer community as a whole.

## Conclusion

In this blog post, I've shared my experience with fine-tuning the Deepseek Coder for the Vala programming language, demonstrating how targeted adjustments can significantly enhance AI coding assistants. This project is just the beginning. I aim to continue developing models specifically optimized for Vala to support the Vala developer community. With the release of new base models, such as CodeQwen 7B, there are exciting possibilities for further advancements. Through this work, I hope to highlight the potential of AI fine-tuning in creating more effective coding assistants and inspire others to explore the possibilities of AI-assisted coding.

Get started with ValaBot here: <https://github.com/supercamel/ValaBot>
