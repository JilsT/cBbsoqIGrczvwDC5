# Learnings From the CubixCraft Assignment!

## 1. Constraints in Form Input Fields

In the task involving form input fields, I learned about adding constraints to both integer and float values. When dealing with integer values, constraints can be straightforward. However, for float values, it's essential to validate and enforce constraints to ensure data accuracy.

For example in Javascript:

```
<input
                                    className="inputForm"
                                    type="number"
                                    name="weight"
                                    min="1"
                                    max="300"
                                    value={inputs.weight || ""}
                                    onChange={handleChange}
                                />
```
This works fine!

But, when used for float values:

```
<input
                                    className="inputForm"
                                    type="number"
                                    name="weight"
                                    min="0.1"
                                    max="3.0"
                                    value={inputs.weight || ""}
                                    onChange={handleChange}
                                />
```
It behaves abnormaly, and I had to specifically validate the values post-submission.

## 1. GitHub Pages and React-Router-Dom

###  BrowserRouter vs HashRouter

Instead of using BrowserRouter, which is not supported, I had to switch to using HashRouter. This change ensures that the application works correctly when hosted on GitHub Pages.

```
<HashRouter></Hashrouter>
```
###  Static basename for GitHub Pages

To make the application's URLs functional on GitHub Pages, a static basename is required. This basename should match the repository name.

```
<Router basename="/repository-name">
        {/* Routes */}
</Router>
````


