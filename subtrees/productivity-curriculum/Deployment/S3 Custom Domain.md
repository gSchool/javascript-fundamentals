## [Amazon Route 53](https://console.aws.amazon.com/route53/home)

Before setting up your domain, make sure you have created an s3 bucket.

## Step 1
Click "Get Started Now" under DNS Management

![Step 1](https://s3-us-west-2.amazonaws.com/lesson-plan-images/Route53HostedZone/01.png)

## Step 2
Click "Create Hosted Zone"

![Step 2](https://s3-us-west-2.amazonaws.com/lesson-plan-images/Route53HostedZone/02.png)

## Step 3
Click "Create Hosted Zone"

![Step 3](https://s3-us-west-2.amazonaws.com/lesson-plan-images/Route53HostedZone/03.png)

## Step 4
Enter Domain Name

Click save

![Step 4](https://s3-us-west-2.amazonaws.com/lesson-plan-images/Route53HostedZone/04.png)

## Step 5
Click "Create Record Set"

![Step 5](https://s3-us-west-2.amazonaws.com/lesson-plan-images/Route53HostedZone/05.png)

## Step 6
Check "Alias" "Yes"

Choose your s3 bucket from the "Alias Target" dropdown

![Step 6](https://s3-us-west-2.amazonaws.com/lesson-plan-images/Route53HostedZone/06.png)

## Step 7
Click Create

![Step 7](https://s3-us-west-2.amazonaws.com/lesson-plan-images/Route53HostedZone/07.png)

## Step 8
Add a CNAME at your DNS provider pointing to your s3 bucket.


<script>
   document.querySelector('.col-md-6').className = '';
</script>

## Slides

[Deployment Slides](https://docs.google.com/presentation/d/1RSTWGJ0UB9ediyX4x5gPvK_t-7kSxcpQklMpE6AZRXE/edit?usp=sharing)
