<?php

namespace App\Controller;

use App\Entity\News;
use App\Entity\Medium;
use App\Repository\NewsRepository;
use App\Utils\Slugger;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class NewsController extends AbstractController
{
    /**
     * @Route("/news", name="news_list", methods = {"GET"})
     */
    public function list(NewsRepository $newsRepository)
    {
       $news = $newsRepository->findNextNews(); 
       return $this->json($news);
    }
}