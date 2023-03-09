# Football Comptestions

An [Hackerrank](https://www.hackerrank.com/) challenge to accomplish during peer-to-peer live interview.

## How to get it up & running?

- First, within Command Line Interface (cli) on your root directory, run `git clone https://github.com/erhanyasar/footballmatchwinner.git`,
- Then change directory to downloaded folder via `cd footballmatchwinner`,
- With your preference of package manager, install dependencies belong to the project `pnpm i` (or `npm i` or `yarn`),
- Lastly run start with your preferred package manager like `pnpm start`.

## Information
### API to hit

`https://jsonmock.hackerrank.com/api/football_competitions?year=<year>`

### Expected Outputs when result found

- `Match {name} won by {winner}`
- `Total Matches: {count}`

### Expected Output when NO results found

In case of no results render below div
`<div data-testid="no-result">No Matches Found</div>`