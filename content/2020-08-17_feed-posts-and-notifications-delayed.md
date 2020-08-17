---
title: Feed & Notifications Delayed
date: '2020-08-17T11:42:20.814Z'
severity: degraded-performance
affectedsystems:
  - feeds
resolved: false
---
Posts and notifications are not appearing on user feeds.

Posts are not being lost and will appear in user feeds when this issue has been resolved. Comments and likes are unaffected by this.

::: update Update | 2020-08-17T14:38:07.000Z
We are investigating the cause of this issue.
:::

::: update Update | 2020-08-17T16:02:09.000Z
There is an issue with our worker services that handle feed posts and notifications that are preventing them from being sent to users.
:::

::: update Mitigated | 2020-08-17T16:48:26.000Z
The issue has been remediated and the queue for deliverying posts and comments are going down. We are continuing to monitor for any futher issues.
:::

<!--- language code: en -->
