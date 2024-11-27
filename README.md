<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Probabilities/Stripe-Reverse">
    <img src="https://static.intercomassets.com/developer-home/change-request-image-uploads/15575/original/Logo-1728997222.png?1728997222" alt="Logo" width="150" height="150">
  </a>

  <h3 align="center">Stripe Reverse</h3>

  <p align="center">
This repository is a full reverse of the request payload that is used on the https://m.stripe.com/6 post request (commonly referred to as the "init" request since it returns muid, guid & sid which are required when interacting with stripe). This is purely POC and should not be used for unethical purposes.
</div>

<!-- GETTING STARTED -->
## Getting Started

Please only use this if you understand what to do with it. If you use the code or share it, please credit me.
<br />
I will provide help but very minimal.
<br />
<br />
I have provided an example file as to how this would be used.

<!-- CONTACT -->
## Contact

Telegram - [@gaveaway](https://t.me/gaveaway)
<br />
Discord - [@shareholders](https://discord.com/users/192475130134265856)
<br />

## Example of decoded payload
```js
{
  v2: 1,
  id: '7db34d243e8a88ebba3c701cd83e020d',
  t: 241,
  tag: '4.5.43',
  src: 'js',
  a: {
    a: { v: 'true', t: 0 },
    b: { v: 'false', t: 0 },
    c: { v: 'en-GB', t: 0 },
    d: { v: 'Win32', t: 0 },
    e: {
      v: 'Browser PDF plug-in,HqVxgvf2j4FKFpUSJjZUxg368mTJr8Hq,application/pdf,pdf, aNlxBIr0,ECozZzCJECozZrdO,,ZYz, OToct9e,Ar89HqVpzhQQvAn,,tiZ, JavaScript portable-document-format plug in,7CgQIMl5k5kxBAAIjRnb05FKNGqdWTw3,application/x-google-chrome-pdf,pdf',
      t: 19
    },
    f: { v: '1920w_1032h_24d_1r', t: 0 },
    g: { v: '1', t: 0 },
    h: { v: 'false', t: 0 },
    i: { v: 'sessionStorage-enabled, localStorage-enabled', t: 3 },
    j: {
      v: '0001110000010000100001011001001001110010101000100111110',
      t: 85
    },
    k: { v: '', t: 0 },
    l: {
      v: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
      t: 0
    },
    m: { v: '', t: 0 },
    n: { v: 'false', t: 85, at: 1 },
    o: { v: 'b723b5fba9cb9289de8b7e1e6de668fd', t: 83 }
  },
  b: {
    a: 'https://ZsDQeK29taBn_hWp8Va6Xe1JgmXWPKhi6RSrOqPz8-k.aBlNfd3guESyKdSmacXSZvE-4l2YGIj1rEUCsHGE5zM/j2ody9xZf3bn7vmOskRgHLhWYfZpFMhNP1CMUEaqhk4/pVoT3KS31m5o8DhjEJ3F_5i5CQYHhxAbeCSW_LlYu0c',
    b: 'https://ZsDQeK29taBn_hWp8Va6Xe1JgmXWPKhi6RSrOqPz8-k.aBlNfd3guESyKdSmacXSZvE-4l2YGIj1rEUCsHGE5zM/j2ody9xZf3bn7vmOskRgHLhWYfZpFMhNP1CMUEaqhk4/pVoT3KS31m5o8DhjEJ3F_5i5CQYHhxAbeCSW_LlYu0c',
    c: 'qWVH_KMq8q-T1ubwnRQogvXwkzDVQJ8ZD4f89_iyEyU',
    d: 'NA',
    e: 'NA',
    f: false,
    g: true,
    h: true,
    i: [ 'location' ],
    j: [],
    n: 283,
    u: 'discord.com',
    v: 'discord.com',
    w: '1732710651345:9A-hH6gPoio3Mv9a9bn9w1GGtgUEpPzpbYvopbM3sJE'
  },
  h: '8337f667fcb1b25e6429'
}
```

## The payload above encoded
```
JTdCJTIydjIlMjIlM0ExJTJDJTIyaWQlMjIlM0ElMjI3ZGIzNGQyNDNlOGE4OGViYmEzYzcwMWNkODNlMDIwZCUyMiUyQyUyMnQlMjIlM0EyNDElMkMlMjJ0YWclMjIlM0ElMjI0LjUuNDMlMjIlMkMlMjJzcmMlMjIlM0ElMjJqcyUyMiUyQyUyMmElMjIlM0ElN0IlMjJhJTIyJTNBJTdCJTIydiUyMiUzQSUyMnRydWUlMjIlMkMlMjJ0JTIyJTNBMCU3RCUyQyUyMmIlMjIlM0ElN0IlMjJ2JTIyJTNBJTIyZmFsc2UlMjIlMkMlMjJ0JTIyJTNBMCU3RCUyQyUyMmMlMjIlM0ElN0IlMjJ2JTIyJTNBJTIyZW4tR0IlMjIlMkMlMjJ0JTIyJTNBMCU3RCUyQyUyMmQlMjIlM0ElN0IlMjJ2JTIyJTNBJTIyV2luMzIlMjIlMkMlMjJ0JTIyJTNBMCU3RCUyQyUyMmUlMjIlM0ElN0IlMjJ2JTIyJTNBJTIyQnJvd3NlciUyMFBERiUyMHBsdWctaW4lMkNIcVZ4Z3ZmMmo0RktGcFVTSmpaVXhnMzY4bVRKcjhIcSUyQ2FwcGxpY2F0aW9uJTJGcGRmJTJDcGRmJTJDJTIwYU5seEJJcjAlMkNFQ296WnpDSkVDb3pacmRPJTJDJTJDWll6JTJDJTIwT1RvY3Q5ZSUyQ0FyODlIcVZwemhRUXZBbiUyQyUyQ3RpWiUyQyUyMEphdmFTY3JpcHQlMjBwb3J0YWJsZS1kb2N1bWVudC1mb3JtYXQlMjBwbHVnJTIwaW4lMkM3Q2dRSU1sNWs1a3hCQUFJalJuYjA1RktOR3FkV1R3MyUyQ2FwcGxpY2F0aW9uJTJGeC1nb29nbGUtY2hyb21lLXBkZiUyQ3BkZiUyMiUyQyUyMnQlMjIlM0ExOSU3RCUyQyUyMmYlMjIlM0ElN0IlMjJ2JTIyJTNBJTIyMTkyMHdfMTAzMmhfMjRkXzFyJTIyJTJDJTIydCUyMiUzQTAlN0QlMkMlMjJnJTIyJTNBJTdCJTIydiUyMiUzQSUyMjElMjIlMkMlMjJ0JTIyJTNBMCU3RCUyQyUyMmglMjIlM0ElN0IlMjJ2JTIyJTNBJTIyZmFsc2UlMjIlMkMlMjJ0JTIyJTNBMCU3RCUyQyUyMmklMjIlM0ElN0IlMjJ2JTIyJTNBJTIyc2Vzc2lvblN0b3JhZ2UtZW5hYmxlZCUyQyUyMGxvY2FsU3RvcmFnZS1lbmFibGVkJTIyJTJDJTIydCUyMiUzQTMlN0QlMkMlMjJqJTIyJTNBJTdCJTIydiUyMiUzQSUyMjAwMDExMTAwMDAwMTAwMDAxMDAwMDEwMTEwMDEwMDEwMDExMTAwMTAxMDEwMDAxMDAxMTExMTAlMjIlMkMlMjJ0JTIyJTNBODUlN0QlMkMlMjJrJTIyJTNBJTdCJTIydiUyMiUzQSUyMiUyMiUyQyUyMnQlMjIlM0EwJTdEJTJDJTIybCUyMiUzQSU3QiUyMnYlMjIlM0ElMjJNb3ppbGxhJTJGNS4wJTIwKFdpbmRvd3MlMjBOVCUyMDEwLjAlM0IlMjBXaW42NCUzQiUyMHg2NCklMjBBcHBsZVdlYktpdCUyRjUzNy4zNiUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBDaHJvbWUlMkYxMjYuMC4wLjAlMjBTYWZhcmklMkY1MzcuMzYlMjIlMkMlMjJ0JTIyJTNBMCU3RCUyQyUyMm0lMjIlM0ElN0IlMjJ2JTIyJTNBJTIyJTIyJTJDJTIydCUyMiUzQTAlN0QlMkMlMjJuJTIyJTNBJTdCJTIydiUyMiUzQSUyMmZhbHNlJTIyJTJDJTIydCUyMiUzQTg1JTJDJTIyYXQlMjIlM0ExJTdEJTJDJTIybyUyMiUzQSU3QiUyMnYlMjIlM0ElMjJiNzIzYjVmYmE5Y2I5Mjg5ZGU4YjdlMWU2ZGU2NjhmZCUyMiUyQyUyMnQlMjIlM0E4MyU3RCU3RCUyQyUyMmIlMjIlM0ElN0IlMjJhJTIyJTNBJTIyaHR0cHMlM0ElMkYlMkZac0RRZUsyOXRhQm5faFdwOFZhNlhlMUpnbVhXUEtoaTZSU3JPcVB6OC1rLmFCbE5mZDNndUVTeUtkU21hY1hTWnZFLTRsMllHSWoxckVVQ3NIR0U1ek0lMkZqMm9keTl4WmYzYm43dm1Pc2tSZ0hMaFdZZlpwRk1oTlAxQ01VRWFxaGs0JTJGcFZvVDNLUzMxbTVvOERoakVKM0ZfNWk1Q1FZSGh4QWJlQ1NXX0xsWXUwYyUyMiUyQyUyMmIlMjIlM0ElMjJodHRwcyUzQSUyRiUyRlpzRFFlSzI5dGFCbl9oV3A4VmE2WGUxSmdtWFdQS2hpNlJTck9xUHo4LWsuYUJsTmZkM2d1RVN5S2RTbWFjWFNadkUtNGwyWUdJajFyRVVDc0hHRTV6TSUyRmoyb2R5OXhaZjNibjd2bU9za1JnSExoV1lmWnBGTWhOUDFDTVVFYXFoazQlMkZwVm9UM0tTMzFtNW84RGhqRUozRl81aTVDUVlIaHhBYmVDU1dfTGxZdTBjJTIyJTJDJTIyYyUyMiUzQSUyMnFXVkhfS01xOHEtVDF1YnduUlFvZ3ZYd2t6RFZRSjhaRDRmODlfaXlFeVUlMjIlMkMlMjJkJTIyJTNBJTIyTkElMjIlMkMlMjJlJTIyJTNBJTIyTkElMjIlMkMlMjJmJTIyJTNBZmFsc2UlMkMlMjJnJTIyJTNBdHJ1ZSUyQyUyMmglMjIlM0F0cnVlJTJDJTIyaSUyMiUzQSU1QiUyMmxvY2F0aW9uJTIyJTVEJTJDJTIyaiUyMiUzQSU1QiU1RCUyQyUyMm4lMjIlM0EyODMlMkMlMjJ1JTIyJTNBJTIyZGlzY29yZC5jb20lMjIlMkMlMjJ2JTIyJTNBJTIyZGlzY29yZC5jb20lMjIlMkMlMjJ3JTIyJTNBJTIyMTczMjcxMDY1MTM0NSUzQTlBLWhINmdQb2lvM012OWE5Ym45dzFHR3RnVUVwUHpwYll2b3BiTTNzSkUlMjIlN0QlMkMlMjJoJTIyJTNBJTIyODMzN2Y2NjdmY2IxYjI1ZTY0MjklMjIlN0Q=
```
