
import React from 'react';
//import {CircleDollar} from "@gravity-ui/icons";
import {Card, Link} from "@heroui/react";

const TaskCard = ({task}) => {
    const {Title, Description} = task;
    return (
            <Card variant='transparent' className="w-[400px]">
            {/* <CircleDollar aria-label="Dollar sign icon" className="text-primary size-6" role="img" /> */}
            <Card.Header>
                <Card.Title>{Title}! </Card.Title>
                <Card.Description>
                    {Description}
                </Card.Description>
            </Card.Header>
            <Card.Footer>
                <Link
                aria-label="Go to Acme Creator Hub (opens in new tab)"
                href="https://heroui.com"
                rel="noopener noreferrer"
                target="_blank"
                >
                Creator Hub
                <Link.Icon aria-hidden="true" />
                </Link>
            </Card.Footer>
            </Card>
    );
};

export default TaskCard;