# Typescript

This project runs Playwright browser tests. 

npx playwright test --ui

To display the browser UI while tests run:
npm.cmd test -- --headed

To run only Chromium visibly:
npx.cmd playwright test --project=chromium --headed

To open the HTML test report afterward:
npx.cmd playwright show-report

Run these commands from the project directory. Let me know if you have any questions!

npx playwright test -g "title": it will test only the specific page with
                                that title/name.
                                -g stands for global.

Running 1 test using 1 worker
Here worker means web browser instance

Synchronous: It is nothing but performing the task step by step execution.
             consol.log() follows synchronous nature.

Asynchronous: It is nothing but performing thr task will execute
              parallel, it won't wait for the previous step.

        We have a problem while performing the task in Asynchronous process. So, we use await keyword for this method.

        Await method will forcefully stops performing the task parallel in the background.
