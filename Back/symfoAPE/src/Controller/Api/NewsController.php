<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\News;
use App\Repository\NewsRepository;

/**
 * @Route("/api", name="api_")
 */
class NewsController extends AbstractController
{
    /**
     * @Route("/news", name="news_list", methods = {"GET"})
     */
    public function list(NewsRepository $newsRepository)
    {
       $news = $newsRepository->findAll(); 
       return $this->json($news);
    }

    /**
     * @Route("/news/{id}", name="news_one", methods={"GET"}))
     */
    public function one(News $news)
    {
        return $this->json($news);
    }
}
