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

 