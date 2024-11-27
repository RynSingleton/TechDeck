import aws_cdk as core
import aws_cdk.assertions as assertions

from tech_deck_cdk.tech_deck_cdk_stack import TechDeckCdkStack

# example tests. To run these tests, uncomment this file along with the example
# resource in tech_deck_cdk/tech_deck_cdk_stack.py
def test_sqs_queue_created():
    app = core.App()
    stack = TechDeckCdkStack(app, "tech-deck-cdk")
    template = assertions.Template.from_stack(stack)

#     template.has_resource_properties("AWS::SQS::Queue", {
#         "VisibilityTimeout": 300
#     })
