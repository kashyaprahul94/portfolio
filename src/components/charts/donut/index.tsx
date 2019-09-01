import { FunctionComponent } from "react";
import styled, { StyledComponent } from "@emotion/styled";

import { Props, SegmentProps, DonutItem, LegendItemProps } from "./types";

import dimension from "../../../style/dimension";

const Container: StyledComponent<{}, {}, {}> = styled.div`
  width: ${dimension.full};
  height: ${dimension.full};

  position: relative;
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: center;
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
  width: ${dimension.full};
  height: ${dimension.full};

  position: relative;
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: center;

  .Donut-Segment {
    transform-origin: center;
  }
`;

const LegendContainer: StyledComponent<any, any, any> = styled.figcaption``;

const LegendItems: StyledComponent<any, any, any> = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const LegendItem: StyledComponent<
  LegendItemProps,
  LegendItemProps,
  {}
> = styled.li`
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
  padding: 0;

  &:before {
    content: "";
    width: 15px;
    height: 15px;
    background: ${props => props.background};
    top: 0;
    left: 0;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 100%;
  }
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
              <LegendItem
                key={item.id}
                className="Donut-Legend-item"
                background={item.color}
              >
                {item.title}
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
