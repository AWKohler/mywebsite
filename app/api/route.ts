import { redirect } from 'next/navigation';

// export const runtime = 'edge';

export async function GET(request: Request) {
    // redirect('https://nextjs.org/');
    redirect('https://raw.githubusercontent.com/AWKohler/test-resources/main/embedai.js');
}