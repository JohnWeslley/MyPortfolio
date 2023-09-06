import Link from "next/link";

export default function AlbumCard({ album }) {
  return (
    <Link href={`/allAlbums/${album.slug}`}>
      <img src={album?.camposDeAlbums.cover?.node?.mediaItemUrl} />
    </Link>
  );
}
