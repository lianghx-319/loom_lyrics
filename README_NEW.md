# Multi-Artist Lyrics Viewer

A dynamic lyrics viewer that automatically generates routes and playlists based on the lyrics directory structure.

## Features

- **Dynamic Routing**: Automatically creates routes for each artist based on directory structure
- **Automatic Lyrics Parsing**: Parses LRC format lyrics files with duplicate handling and time sorting
- **Cover Image Management**: Intelligently assigns cover images to avoid duplicates
- **Build-time Generation**: Automatically generates artist data during build process
- **Responsive Design**: Works on desktop and mobile devices

## Project Structure

```
lyrics/
├── Artist_Name/          # Artist directory (will be converted to "Artist Name")
│   ├── song1.lrc        # LRC format lyrics file
│   └── song2.lrc        # Multiple songs per artist supported
└── Another_Artist/
    └── song3.lrc

src/
├── components/           # React components
├── utils/               # Utility functions
├── data/                # Generated artist data (auto-generated)
└── AppRouter.tsx        # Main routing component
```

## Adding New Artists and Songs

1. **Create Artist Directory**: Add a new folder under `lyrics/` with the artist name (use underscores for spaces)
2. **Add Lyrics Files**: Place `.lrc` format lyrics files in the artist directory
3. **Rebuild**: Run `npm run build` to regenerate the artist data
4. **Deploy**: Deploy the updated application

### Example

To add a new artist "Taylor Swift" with a song "Love Story":

```bash
mkdir lyrics/Taylor_Swift
echo "[00:00.00]We were both young when I first saw you..." > lyrics/Taylor_Swift/love_story.lrc
npm run build
```

## Lyrics Format

The application supports standard LRC format with time tags:

```
[00:12.50]对这个世界如果你有太多的抱怨
[00:16.50]跌倒了就不敢继续往前走
[00:20.50]为什么人要这么的脆弱 堕落
```

### Duplicate Handling

When lyrics contain duplicate lines with different timestamps, the system:
1. Identifies duplicate text content
2. Keeps only the earliest occurrence
3. Sorts all lines by timestamp

## Cover Images

Cover images are automatically assigned from the available pool:
- Images are stored in `src/assets/covers/`
- Each artist gets a unique cover image
- Duplicate usage is minimized through intelligent assignment

Available covers: `loom.png`, `evolve.jpg`, `origins.png`, `bones.jpg`, `tiptoe.jpg`, `shots.jpeg`

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Generate lyrics data only
npm run generate:lyrics
```

## Build Process

The build process automatically:
1. Scans the `lyrics/` directory for artist folders
2. Parses all `.lrc` files using the custom parser
3. Handles duplicate lyrics and sorts by timestamp
4. Assigns cover images to avoid duplicates
5. Generates `src/data/artistsData.ts` with all artist information
6. Creates optimized production build

## Technical Details

- **Framework**: React 19 + TypeScript
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Lyrics Parser**: Custom implementation with duplicate handling
- **PWA**: Service worker for offline functionality