'use client';

import { MapPin, QrCode, Share } from 'lucide-react';
import { useState } from 'react';

import { Button } from './button';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from './dialog';
import { ScrollArea } from './scroll-area';

const blocks = [
  { id: 1, name: 'Блок 1', description: 'lorem ipsum istas csase' },
  { id: 2, name: 'Блок 2', description: 'lorem ipsum istas csase' },
  { id: 3, name: 'Блок 3', description: 'lorem ipsum istas csase' },
  { id: 4, name: 'Блок 4', description: 'lorem ipsum istas csase' },
  { id: 5, name: 'Блок 5', description: 'lorem ipsum istas csase' },
  { id: 6, name: 'Блок 6', description: 'lorem ipsum istas csase' },
  { id: 7, name: 'Блок 7', description: 'lorem ipsum istas csase' },
  { id: 8, name: 'Блок 8', description: 'lorem ipsum istas csase' },
  { id: 9, name: 'Блок 9', description: 'lorem ipsum istas csase' },
  { id: 10, name: 'Блок 10', description: 'lorem ipsum istas csase' },
  { id: 11, name: 'Блок 11', description: 'lorem ipsum istas csase' }
];

export default function Component() {
  const [selectedBlock, setSelectedBlock] = useState('');

  const handleShare = (block: string) => {
    if (navigator.share) {
      navigator.share({
        title: 'Check out this block',
        text: `I want to share ${block} with you!`,
        url: `https://maps.google.com/?q=${encodeURIComponent(block)}`
      });
    } else {
      alert('Web Share API is not supported in your browser');
    }
  };

  const handleOpenMaps = (block: string) => {
    window.open(
      `https://maps.google.com/?q=${encodeURIComponent(block)}`,
      '_blank'
    );
  };

  return (
    <div className="bg-gray-100 p-4" data-pagefind-ignore="all">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="pb-2">
          <CardTitle>Карта и локации</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className=" pr-4">
            {blocks.map(block => (
              <div
                key={block.id}
                className="mb-2 p-2 bg-white rounded-lg shadow flex items-center justify-between"
              >
                <div className="flex-grow mr-2">
                  <h3 className="text-sm font-semibold">{block.name}</h3>
                  <p className="text-xs text-gray-600 truncate">
                    {block.description}
                  </p>
                </div>
                <div className="flex space-x-1">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8"
                    onClick={() => handleShare(block.name)}
                  >
                    <Share className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8"
                    onClick={() => handleOpenMaps(block.name)}
                  >
                    <MapPin className="h-4 w-4" />
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8"
                        onClick={() => setSelectedBlock(block.name)}
                      >
                        <QrCode className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>
                          Share QR Code for {selectedBlock}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="flex justify-center items-center h-64">
                        <img
                          src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
                            `https://maps.google.com/?q=${encodeURIComponent(selectedBlock)}`
                          )}`}
                          alt={`QR Code for ${selectedBlock}`}
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
