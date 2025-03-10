import { Grid, Heading } from "@chakra-ui/react";
import React from "react";
import { TechLogos } from "./TechLogos";

type TechSectionProps = {
  title: string;
  techTitles?: string[];
  fetching: boolean;
  setHoverComponentName: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
  uniqueIdentifier?: string;
};

export const _TechSection: React.FC<TechSectionProps> = ({
  title,
  techTitles,
  fetching,
  setHoverComponentName,
  uniqueIdentifier,
}) => {
  return (
    <Grid id="tech-section">
      <Heading
        size="lg"
        fontWeight="100"
        letterSpacing="3px"
        as="h2"
        mb="1.75rem"
      >
        {title}
      </Heading>

      <Grid
        id="tech-container"
        padding="1rem"
        bgColor="backgroundOnBlack"
        borderRadius="1rem"
        placeItems="center"
        data-cy="tech-container"
      >
        {!fetching && techTitles?.length ? (
          <TechLogos
            setHoverComponentName={setHoverComponentName}
            techTitles={techTitles}
            noBorder={true}
            noSpace={true}
            uniqueIdentifier={uniqueIdentifier}
          />
        ) : (
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        )}
      </Grid>
    </Grid>
  );
};

export const TechSection = React.memo(
  _TechSection
) as React.FC<TechSectionProps>;
