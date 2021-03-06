import { Box } from '@chakra-ui/react'

const Miraklasiaf = (props) => (
  <Box as="svg" width="500" height="500" viewBox="0 0 500 500" fill="none" {...props}>
    <rect width="500" height="500" rx="250" fill="url(#paint0_linear)" />
    <path
      d="M311.659 184.364H268.335V169.733C268.335 154.96 274.301 146.295 292.057 146.295C299.301 146.295 306.688 147.858 311.517 149.42L322.17 103.966C314.642 101.693 298.023 98 279.415 98C238.364 98 207.824 121.153 207.824 168.597V184.364H177V229.818H207.824V402.545H268.335V229.818H311.659V184.364Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="0"
        y1="250"
        x2="500"
        y2="250"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#02AAB0" />
        <stop offset="1" stopColor="#00CDAC" />
      </linearGradient>
    </defs>
  </Box>
)

export default Miraklasiaf
