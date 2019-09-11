import { FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import { dimensions } from "../../../style/dimension";
import { display, position, alignment } from "../../../style/layout";
import { lineHeight } from "../../../style/typography";

import { Props, SegmentProps, DonutItem, LegendItemProps } from "./types";

const Container: StyledComponent<{}, {}, {}> = styled.div`
  width: ${dimensions.full};
  height: ${dimensions.full};

  position: ${position.relative};
  display: ${display.flex};
  align-items: ${alignment.center};
  justify-content: ${alignment.center};
`;

const DonutWrapper: FunctionComponent<Pick<Props, "size">> = ({
  size,
  children,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="Donut"
    >
      {children}
    </svg>
  );
};

const SegmentContainer: StyledComponent<{}, {}, {}> = styled.g`
  width: ${dimensions.full};
  height: ${dimensions.full};

  position: ${position.relative};
  display: ${display.flex};
  align-items: ${alignment.center};
  justify-content: ${alignment.center};

  padding: ${dimensions.m};

  .Donut-Segment {
    transform-origin: ${alignment.center};
  }
`;

const LegendContainer: StyledComponent<any, any, any> = styled.figcaption``;

const LegendItems: StyledComponent<any, any, any> = styled.ul`
  margin: ${dimensions.zero};
  padding: ${dimensions.zero};
  list-style: ${display.none};
`;

const LegendItem: StyledComponent<any, any, {}> = styled.li`
  margin-bottom: ${dimensions.m};
  display: ${display.flex};
  align-items: ${alignment.center};
`;

const LegendItemColorIndicator: StyledComponent<
  LegendItemProps,
  LegendItemProps,
  {}
> = styled.div`
  background: ${props => props.background};
  border-radius: ${dimensions.full};
  margin-right: ${dimensions.s};

  width: ${dimensions.xl};
  min-width: ${dimensions.xl};
  height: ${dimensions.xl};
  min-height: ${dimensions.xl};
`;

const Segment: FunctionComponent<SegmentProps> = ({
  color,
  radius,
  normalizedRadius,
  stroke,
  strokeDasharray,
  strokeDashoffset,
  angle,
  className,
}) => {
  return (
    <SegmentContainer>
      <circle
        className={className}
        cx={radius}
        cy={radius}
        r={normalizedRadius}
        fill="transparent"
        stroke={color}
        strokeWidth={stroke}
        strokeDasharray={strokeDasharray ? `${strokeDasharray}` : null}
        style={{
          strokeDashoffset,
          transform: angle ? `rotate(${angle}deg)` : null,
        }}
      />
    </SegmentContainer>
  );
};

const calculateStrokeDashOffset = (circumference: number) => (value: number) =>
  circumference - (value / 100) * circumference;

const generateId = (index: number) => `DONUT_ITEM_${index}_${Date.now()}`;

const Donut: FunctionComponent<Props> = ({ size, stroke, items, legend }) => {
  const radius = size / 2;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashOffsetCalculator = calculateStrokeDashOffset(circumference);

  const [firstItem, ...restItems] = items;

  const donutItems = restItems.reduce(
    (acc: DonutItem[], item: DonutItem, index: number) => {
      const { angle: lastAngle, value: lastValue } = acc[acc.length - 1];

      return [
        ...acc,
        {
          ...item,
          id: generateId(index + 1),
          angle: (lastValue / 100) * 360 + lastAngle,
        },
      ];
    },
    [
      {
        ...firstItem,
        id: generateId(0),
        angle: -90,
      },
    ],
  );

  return (
    <Container>
      <DonutWrapper size={size}>
        <Segment
          className="Donut-Wrapper"
          radius={radius}
          normalizedRadius={normalizedRadius}
          stroke={stroke}
        />
        {donutItems.map((item: DonutItem) => (
          <Segment
            key={item.id}
            className="Donut-Segment"
            radius={radius}
            normalizedRadius={normalizedRadius}
            stroke={stroke}
            color={item.color}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashOffsetCalculator(item.value)}
            angle={item.angle}
          />
        ))}
      </DonutWrapper>
      {legend && (
        <LegendContainer className="Donut-Legend">
          <LegendItems className="Donut-Legend-items">
            {donutItems.map((item: DonutItem) => (
              <LegendItem key={item.id} className="Donut-Legend-item">
                <LegendItemColorIndicator background={item.color} />
                <p>{item.title}</p>
              </LegendItem>
            ))}
          </LegendItems>
        </LegendContainer>
      )}
    </Container>
  );
};

export { Donut };
export default Donut;
