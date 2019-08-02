<?php

namespace App\Controller;

use App\Entity\Medium;
use App\Repository\MediumRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MediumController extends AbstractController
{
    /**
     * @Route("/media", name="media_list", methods = {"GET"})
     */
    public function list(MediumRepository $mediumRepository)
    {
       $media = $mediumRepository->findAll(); 
       return $this->json($media);
    }   

    /**
     * @Route("/media/{id}", name="media_show", methods={"GET"}))
     */
    public function show(Medium $medium)
    {
        if (empty($medium)) {
            return new JsonResponse(['message' => 'File not found'], Response::HTTP_NOT_FOUND);
          }
        return $this->json($medium);
    }

    /**
     * @Route("/api/Media/create", name="media_create")
     */
    public function create(Request $request, EntityManagerInterface $entityManager) {
      $newMedia = json_decode($request->getContent(), true);  

      $media = new media();
      $media->setTitle($newMedia->title);
      $media->setType($newMedia->type);
      $media->setUrl($newMedia->url);
      $media->setTitle($newMedia->title);

      $entityManager->persist($media);
      $entityManager->flush();
      
      $data = [
          'status' => 201,
          'message' => 'Le media à été ajouté'
      ];
      return new JsonResponse($data, 201);  
    } 


    /** 
     * @Route("/api/Media/{id}/edit", name="media_edit")
     */
    public function edit(Medium $media, Request $request) 
    {
        // $this->denyAccessUnlessGranted
        $media = json_decode($request->getContent());
        if ($media === null) {
            return new JsonResponse(['message' =>'Ce media n\'existe pas.'], Response::HTTP_NOT_FOUND);
        }

        $response = new JsonResponse($media, 200);
        return $response;
    }

    /**
     * @Route("/api/Media/{id}/delete", name="media_delete")
     */
    public function delete($id) {

        $medium = $this->getDoctrine()->getRepository(Medium::class)->find($id);
        
      if ($medium) {
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($medium);
        $entityManager->flush();
      }
      return new Response(null, 204);
    }
}
