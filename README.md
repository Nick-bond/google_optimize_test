# google_optimize_test

Testing if Google Optimize was correct to set and its work in the browser

### Variables

- `URL` - website url for test
- `Experiment_Id` - id of google optimize experiment
- `Global_variable` - global variable name
- `quantityOfTestRun` - Quantity of unique opens the browser for determining if user get into experiment

### For run script
- Clone project
- Install all dependencies
```
npm install
```
- Set all variable with corresponding data to your experiment
- Open dev tools
- Run in console
``` 
node go-test.js
```

### Output

```
{ go_status: '0', window_global_var_status: 'test case 1' }
{ window_global_var_status: 'not-set' }
{ window_global_var_status: 'not-set' }
{ window_global_var_status: 'not-set' }
{ window_global_var_status: 'not-set' }
{ window_global_var_status: 'not-set' }
{ window_global_var_status: 'not-set' }
{ window_global_var_status: 'not-set' }
{ window_global_var_status: 'not-set' }
{ go_status: '1', window_global_var_status: 'test case 2' }
{ window_global_var_status: 'not-set' }
{ window_global_var_status: 'not-set' }
{ go_status: '0', window_global_var_status: 'test case 1' }
{ window_global_var_status: 'not-set' }
{ window_global_var_status: 'not-set' }
{ window_global_var_status: 'not-set' }
{ window_global_var_status: 'not-set' }
{ window_global_var_status: 'not-set' }
{ window_global_var_status: 'not-set' }
{ window_global_var_status: 'not-set' }
{ window_global_var_status: 'not-set' }
{ window_global_var_status: 'not-set' }
{ window_global_var_status: 'not-set' }
{ window_global_var_status: 'not-set' }
{ window_global_var_status: 'not-set' }

```