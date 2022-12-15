import homeStyles from '../../stylesheets/components/home/homeTweetCounter.module.scss';

export const HomeTweetCounter: React.FC<{ tweetLength: number }> = ({ tweetLength }) => {
  const TWEET_LENGTH_LIMIT = tweetLength >= 280;
  const TWENTY_REMAINING = tweetLength >= 260;
  const MULTIPLIER_VALUE = 0.195;
  const OFFSET_BASE = 56.5487;
  const ARRAY_BASE = 87.9646;

  const ARRAY_RESIZE = TWENTY_REMAINING ? ARRAY_BASE : OFFSET_BASE;
  const OFFSET_CALC = OFFSET_BASE - tweetLength * MULTIPLIER_VALUE;
  const VIEW_BOX_RESIZE = TWENTY_REMAINING ? '30 30' : '20 20';
  const R_RESIZE = TWENTY_REMAINING ? '14' : '9';

  const YELLOW = 'hsl(50deg 100% 50%)';
  const BLUE = 'hsl(204deg 88% 53%)';
  const GREY = 'hsl(206deg 7% 20%)';
  const RED = 'hsl(356deg 91% 54%)';
  const BLACK = 'hsl(0deg 0% 0%)';

  const fillColors = (tweetLength: number) => {
    if (tweetLength >= 290) return BLACK;
    if (tweetLength >= 280) return RED;
    if (tweetLength >= 260) return YELLOW;
    return BLUE;
  };

  return (
    <div className={homeStyles.container}>
      <svg
        className={
          TWENTY_REMAINING ? `${homeStyles.logo} ${homeStyles.logoResize}` : `${homeStyles.logo}`
        }
        viewBox={`0 0 ${VIEW_BOX_RESIZE}`}
      >
        <circle
          className={homeStyles.shadow}
          style={{ stroke: TWEET_LENGTH_LIMIT ? BLACK : GREY }}
          r={R_RESIZE}
          cx='50%'
          cy='50%'
        />
        <circle
          className={homeStyles.fill}
          style={{
            stroke: `${fillColors(tweetLength)}`,
            strokeDasharray: ARRAY_RESIZE,
            strokeDashoffset: OFFSET_CALC,
          }}
          r={R_RESIZE}
          cx='50%'
          cy='50%'
        />
      </svg>
      {TWENTY_REMAINING && (
        <span
          className={
            TWEET_LENGTH_LIMIT ? `${homeStyles.text} ${homeStyles.textLimit}` : `${homeStyles.text}`
          }
        >
          {280 - tweetLength}
        </span>
      )}
    </div>
  );
};
