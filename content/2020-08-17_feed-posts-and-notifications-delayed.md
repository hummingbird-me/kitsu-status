---
title: Feed & Notifications Delayed
date: '2020-08-17T11:42:20.814Z'
severity: degraded-performance
affectedsystems:
  - feeds
resolved: true
---
Posts and notifications are not appearing on user feeds.


Posts are not being lost and will appear in user feeds when once the post queue has decreased. Comments and likes are not affected by this.

::: update Monitoring | 2020-08-17T14:38:07.000Z
We are investigating the cause of this incident.
:::

::: update Update | 2020-08-17T16:02:09.000Z
There is an issue with our worker services that handle feed posts and notifications that are preventing them from being sent to users.
:::

::: update Mitigated | 2020-08-17T16:48:26.000Z
The issue has been remediated and the queue for delivering posts and comments are going down. We are continuing to monitor for any futher issues.
:::

::: update Resolved | 2020-08-17T17:05:19.000Z
This incident has been resolved.
:::

<!--- language code: en -->
