# notes to remember why I wrote this

Literally just to manage and extract the data I want in a way that I know sort of quickly and easily.

Data downloaded from the NIST site; https://nvd.nist.gov/vuln/data-feeds

Consumed in json format.

I've now been able to expand into dates and the best most CRITICAL CVE's. The search gives something consistent to upload more data ontop of, where I did a bunch of maths (just additions, not very fancy) to try and make the order consistent and the count unique. Yeah.. I could include all 8million CVE's, but if this thing is running past the 2200 that I've decided I'd stop up, I'll be suprised. I've also deduped the 5 digit CVE so hopefully there's no duplicates of that. It'll need an index match for the correct year.
