# Parse It 
### A natural language query identifier

#### Goal
The goal of this project is to parse an incoming String, identify words, and return back the results.

#### Response instructions
The response should be formatted as follows:

<b>Query: </b> 'Today is your Hello World test!'

<b>Response: </b>

`[
    {
        matchedWord: 'Today',
        type: 'date',
        value: "10-08-2018"
    },
    {
        matchedWord: 'is',
        type: 'stop word',
        value: 'is'
    },
    {
        matchedWord: 'your',
        type: 'stop word',
        value: 'your'
    },
    {
        matchedWord: 'Hello',
        type: 'unknown',
        value: 'hello'
    },
    {
        matchedWord: 'World',
        type: 'unknown',
        value: 'world'
    },
    {
        matchedWord: 'test',
        type: 'unknown',
        value: 'test'
    }
]`

### Notes
1. if matchWord exists in StopWord.js, simply set type: "stop word" and value: `${matchWord}`
2. if matchWord exists in mealtime.names in Identifier.js, set type: "meal time" and value: matchWord
3. if matchWord exists in dates.names in Indentifier.js, set type: "dates" and value: moment() with respect of matchWord
4. if matchWord does not exist in any, set type to "unknown" and value: `${matchWord}`
 
 #### Endpoints required
 
 1. GET /mealtimes - return back all mealtimes
 2. GET /dates - return back all dates
 3. GET /stopwords - return back all stop words 
 4. Additionally, for endpoints 1-3, add an optional `query` query parameter that filters 
 the results and returns back the items `value` and it's given `type`. It's up to you to determine how to perform this filtering.
 
 eg: `/mealtimes?query=breakfast`
 
 response: `{
    status: "success",
    data: [
        {
            value: "morning",
            type: "mealtime"
        }
    ]
 }`
 
 
 
 5. POST /query - perform a query analysis

#### Requirements: 
All responses should be in the following format:

`{
    status: "success" | "failure",
    data: {} // API data
}`
