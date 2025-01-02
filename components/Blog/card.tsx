import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

interface InfoPostProps {
  titulo: string;
  data: string;
  descricao: string;
  tags?: string[];
  link: string;
}

// Função para gerar uma cor hexadecimal aleatória
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const PreviewPoemCard: React.FC<InfoPostProps> = ({ titulo, data, descricao, tags, link }) => {
  return (
    <Card className=" max-w-sm mx-auto w-80">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/thiago-cover.png" alt="Thiago cover" />
            <AvatarFallback>T.</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-lg font-semibold">{titulo}</h3>
            <p className="text-sm text-muted-foreground">Thiago G. Mota</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-2">{data}</p>
        <p className="line-clamp-4">{descricao}</p>
        {/* Renderização das tags com cores aleatórias */}
        {tags && (
          <div className="mt-2">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                style={{ backgroundColor: getRandomColor() }} // Cor aleatória para cada tag
                className="mr-2 text-white px-2 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        
          <Link href={link} className="shadow-sm rounded hover:bg-zinc-100 w-full h-full text-center py-2">Ler Post</Link>
       
      </CardFooter>
    </Card>
  );
};

export default PreviewPoemCard;