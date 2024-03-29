# StatusSlider

### - Git Flow command

- Use command `git flow init` to initialize the git default branching go with default.
- Auto matically new branch called `develop` created and will checkout to develop.

### Git feature commant

- To start working on new feature use command `git flow feature start <branch_name>` you can use any branch name which you want to create for new feature.
- for example `git flow feature start test` will create `feature/test` branch and will checkout to `feature/test` branch.

Make changes in `feature/test` and commit the code.

### How to Merge in develop branch.

- to merge `feature/test` branch in develop need to use command `git flow feature finish feature/test`.
- Above command merge the `feature` into `develop` branch and deletes the `fetaure/test` branch.

### If changes requires PR before merge.

- Commit the changes in `feature/test` branch.
- use command `git push origin feature/test` and raise a pull request with develop branch.

### Next after mergin feature into develop.

- create a `release` branch from `develop`
- use command `git flow release start 1.0.0`
- above command will create a realease beanch with name `release/1.0.0`
- make release changes version update and test
- commit changes
- merge back to `develop` and main `branch`

### mergin release to main and devlop.

- To merge release in both main and develop use command `git flow release finish <branch_name>` branch_name here represents the name of the release branch.
- For example `git flow release finish release/1.0.0` will merge code in main and devlop both.
- and deletes the `release/test` branch after merging.

### If PR review need

- push the code to release/1.0.0
- Raise two PR's one with main and one with develop.

-------------------X---------------------X-----------------end.
