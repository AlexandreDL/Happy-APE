<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Media;
use App\Repository\MediaRepository;

/**
* @Route("/api", name="api_")
*/
class MediaController extends AbstractController
{
    /**
     * @Route("/medias", name="media_list", methods = {"GET"})
     */
    public function list(MediaRepository $mediaRepository)
    {
       $medias = $mediaRepository->findAll(); 
       return $this->json($medias);
    }   

    /**
     * @Route("/media/{id}", name="media_one", methods={"GET"}))
     */
    public function one(media $media)
    {
        return $this->json($media);
    }
    
}
  