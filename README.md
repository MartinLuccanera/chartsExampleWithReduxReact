# ReduxSimpleStarter

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/StephenGrider/ReduxSimpleStarter.git
> cd ReduxSimpleStarter
> npm install
> npm start
```

#### Not Familiar with Git?
Click [here](https://github.com/StephenGrider/ReactStarter/releases) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> npm install
> npm start
```

App idea:

Create an app to serve 3 purposes. 
1) Solidify knowledge of react.
2) Get more familiar with redux.
3) Figure out how to make asynch calls with redux (like AJAX requests).

Is much like the youtube app but now its redux themed.

We will build a weather forecast browser. We will search for a city and after submitting the search we will query a 
third party API which will serve us forecasted weather data for the next 5 days. With that data we will add a row on a table
with information about that particular city's forecast for the next 5 days. The user can search for many different cities
over time, and each search will add an additional row.

```
City-name |Temperature | Pressure | Humidity  
```

Rather than showing the numbers we will show a line chart to represent those values. To keep them simple, we won't add
axis labels nor values in the chart itself.

Challenges:

1) How to make AJAX requests with redux? With redux, we need to centralize all our logic into reducers and actions as 
much as possible (Our react components are only responsible for showing data, not fetching).

2) How to make a line chart? We are gonna use a third party library. But how to work with a react component made by another
dev and integrate it into our own project. 

3) How to deal with a redux app where our state changes significantly over time?. We are gonna be changing our state a lot. 
We have a list of cities, each time that the user conducts a search we are not gonna replace the array of cities; we
are gonna add on to that array. 