---
title: Managing Multiple Git Configurations for Work and Personal Projects
date: '2026-04-13'
description: Learn how to manage different Git user identities for work and personal projects using conditional includes in your Git configuration.
tags:
  - Git
---

## Managing Multiple Git Configurations for Work and Personal Projects

When working on both personal and professional projects, it’s common to use different email addresses for Git commits. Using your work email for company repositories and your personal email for open-source or side projects helps keep your contributions organized and ensures compliance with company policies.

However, switching between these identities can be cumbersome if you rely on a single global Git configuration. Fortunately, Git provides a flexible way to manage multiple configurations using conditional includes.

### The Scenario

Imagine you have a work email and a personal email, and you contribute to both work and personal repositories on the same computer. You want to ensure that commits to your company’s repositories use your work email, while commits to your personal projects use your personal email. Manually changing your Git configuration every time you switch contexts is error-prone and inefficient.

### The Solution: Conditional Git Config Includes

Git allows you to split your configuration into multiple files and include them conditionally based on the repository path or remote URL. Here’s how you can set this up:

1. **Create Separate Config Files**  
   Create one config file for your personal identity and another for your work identity. For example:
   - `~/.gitconfig-personal`
   - `~/.gitconfig-work`

   Each file should contain the relevant `[user]` section:

   ```
   [user]
       name = Your Name
       email = your.personal@email.com
   ```

   and

   ```
   [user]
       name = Your Name
       email = your.work@email.com
   ```

2. **Edit Your Main `.gitconfig`**  
   In your main `~/.gitconfig`, include your personal config by default:

   ```
   [include]
       path = ~/.gitconfig-personal
   ```

3. **Add Conditional Includes for Work Repositories**  
   Use the `[includeIf]` directive to include your work config only for specific repositories. You can match by directory or by remote URL. For example:

   ```
   [includeIf "gitdir:~/work/"]
       path = ~/.gitconfig-work
   ```

   Or, to match by remote URL:

   ```
   [includeIf "hasconfig:remote.*.url:https://github.com/your-company/**"]
       path = ~/.gitconfig-work
   ```

   This ensures that whenever you’re working in a repository that matches the condition, Git will use your work identity.

### Benefits

- **No manual switching:** Git automatically uses the correct identity based on the repository.
- **Separation of concerns:** Keeps your work and personal contributions distinct.
- **Compliance:** Ensures you always use the correct email for company repositories.

### Conclusion

Managing multiple Git identities on the same machine is straightforward with conditional includes. By organizing your configuration files and using Git’s powerful include features, you can seamlessly switch between work and personal projects without worrying about misattributed commits.
