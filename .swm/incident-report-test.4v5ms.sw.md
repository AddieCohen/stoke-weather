---
id: 4v5ms
name: 🩺 Incident Report - test
file_version: 1.0.2
app_version: 0.9.3-3
file_blobs:
  src/features/message/message.tsx: a05f70da11282cba615bdaed59fd412738e28dc4
---

Here is a list of guided questions that should make it easier to identify what happened and what we can do better.

## What Happened?

this is what happened here

## Who was Involved?

{Mention who was involved in debugging and investigating the issue, this can be anonymous as well, e.g engineers from this or that team}

## Who or What was Impacted?

{Explain and quantify (if possible) the damage caused by this incident, i.e users couldn't perform a certain task during the incident}

## What was the Root Cause?

{Describe the root cause for the incident}

## How was It Reported?

{Describe how the issue was found, by whom it was reported, etc.}

## When did It Happen?

*   Service degradation start: 20YY-MM-DD HH:MM:SS UTC
    
*   Service degradation ended: 20YY-MM-DD HH:MM:SS UTC
    
*   First alert was raised: 20YY-MM-DD HH:MM:SS UTC
    
*   Timeline (time in UTC+2):
    
    *   20YY-MM-DD HH:MM:SS UTC - offending code was deployed
        
    *   20YY-MM-DD HH:MM:SS UTC - ...

<br/>

<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/features/message/message.tsx
```tsx
🟩 1      export function Message(props: any) {
🟩 2          return (
🟩 3              <div>
⬜ 4                  <div>Oops! something went wrong</div>
⬜ 5                  <div>{props.data}</div>
⬜ 6              </div>
```

<br/>

This file was generated by Swimm. [Click here to view it in the app](http://localhost:5000/repos/Z2l0aHViJTNBJTNBc3Rva2Utd2VhdGhlciUzQSUzQUFkZGllQ29oZW4=/docs/4v5ms).